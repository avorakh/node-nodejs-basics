import { join } from 'path';
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

const write = async () => {

    let fileToWrite = join(import.meta.dirname, 'files', 'fileToWrite.txt');
    const fileStream = createWriteStream(fileToWrite);

    await pipeline(
        process.stdin,
        fileStream
    );
};

await write();