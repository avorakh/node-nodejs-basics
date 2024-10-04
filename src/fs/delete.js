import { join } from 'path';
import { rm } from 'fs/promises';
import { isExistingPath } from './utils.js'


const remove = async () => {
    let filePath = join(import.meta.dirname, 'files', 'fileToRemove.txt');

    let isExistingFile = await isExistingPath(filePath);

    if (isExistingFile) {
        await rm(filePath);
    } else {
        throw new Error('FS operation failed');
    }
};

await remove();