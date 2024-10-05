import { createHash } from 'crypto';
import { join } from 'path';
import { open } from 'fs/promises';


const calculateHash = async () => {
    let filePath = join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');

    let fd = await open(filePath);
    let stream = fd.createReadStream();

    let hash = createHash('sha256');

    stream.on('error', function (error) {

        console.log(`error: ${error.message}`);
    })

    stream.on('data', (chunk) => {
        hash.update(chunk);
    });

    stream.on('end', () => {
        let result = hash.digest('hex');
        console.log(result);
    });
};

await calculateHash();