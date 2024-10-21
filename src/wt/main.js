import { Worker } from "worker_threads";
import { join } from 'path';
import { cpus } from 'os';


const start_number = 10;


function WorkerResult(status, data) {
    this.status = status;
    this.data = data;

};


const createWorkerResult = (result) => {

    return (result !== null)
        ? new WorkerResult('resolved', result)
        : new WorkerResult('error');
}


const createWorker = async (n) => {

    return new Promise((resolve) => {
        let workerPath = join(import.meta.dirname, 'worker.js');

        let worker = new Worker(workerPath, { workerData: n });

        worker.on("message", msg => resolve(createWorkerResult(msg)));

        worker.on("error", err => resolve(createWorkerResult()));

        worker.on("exit", code => resolve(createWorkerResult()));
    });
}


const performCalculations = async () => {

    const coreNumber = cpus().length;

    const workerPromises = Array.from({ length: coreNumber }, (_, index) => {
        return createWorker(start_number + index);
    });

    const workerResults = await Promise.all(workerPromises);

    console.log(workerResults);
};

await performCalculations();