import { spawn } from 'child_process';
import { join } from 'path';

const spawnChildProcess = async (args) => {
    let scriptPath = join(import.meta.dirname, 'files', 'script.js');


    let child = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });


    process.stdin.pipe(child.stdin);


    child.stdout.pipe(process.stdout);


    child.on('exit', (code) => {
        console.log(`Child process was closed with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
