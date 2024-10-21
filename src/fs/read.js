import { join } from 'path';
import { readFile } from 'fs/promises';
import { isExistingPath } from './utils.js'


const read = async () => {
    let filePath = join(import.meta.dirname, 'files', 'fileToRead.txt');

    let isExistingFile = await isExistingPath(filePath);

    if (isExistingFile) {
        let fileContent = await readFile(filePath, { encoding: 'utf8' });
        console.log(fileContent);
    } else {
        throw new Error('FS operation failed');
    }
};

await read();