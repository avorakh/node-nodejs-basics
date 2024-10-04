import { join } from 'path';
import { readFile } from 'fs/promises';
import { currentDirectoryPath, isExistingPath } from './utils.js'


const read = async () => {
    let currentDir = currentDirectoryPath();
    let filePath = join(currentDir, 'files', 'fileToRead.txt');

    let isExistingFile = await isExistingPath(filePath);

    if (isExistingFile) {
        let fileContent = await readFile(filePath, { encoding: 'utf8' });
        console.log(fileContent);
    } else {
        throw new Error('FS operation failed');
    }
};

await read();