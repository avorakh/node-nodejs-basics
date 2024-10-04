import { join } from 'path';
import { rm } from 'fs/promises';
import { currentDirectoryPath, isExistingPath } from './utils.js'


const remove = async () => {
    let currentDir = currentDirectoryPath();
    let filePath = join(currentDir, 'files', 'fileToRemove.txt');

    let isExistingFile = await isExistingPath(filePath);

    if (isExistingFile) {
        await rm(filePath);
    } else {
        throw new Error('FS operation failed');
    }
};

await remove();