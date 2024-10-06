import { join } from 'path';
import { createReadStream } from 'fs';

const read = async () => {
    let filePath = join(import.meta.dirname, 'files', 'fileToRead.txt');

    const inputFileStream = createReadStream(filePath, { encoding: 'utf-8' });

    inputFileStream.on('readable', () => {
        console.log();
        let chunk;

        while ((chunk = inputFileStream.read()) !== null) {
            process.stdout.write(chunk.toString());
        }
    });
};

await read();