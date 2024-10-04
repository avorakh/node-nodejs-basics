import { join } from 'path';
import { rename as rnm } from 'fs/promises';
import { isExistingPath } from './utils.js'


const rename = async () => {
    let oldFilePath = join(import.meta.dirname, 'files', 'wrongFilename.txt');
    let newFilePath = join(import.meta.dirname, 'files', 'properFilename.md');

    let isOldFilePathExist = await isExistingPath(oldFilePath);
    let isNewFilePathExist = await isExistingPath(newFilePath);

    if (isOldFilePathExist && !isNewFilePathExist) {
        await rnm(oldFilePath, newFilePath)
    } else {
        throw new Error('FS operation failed');
    }
};

await rename();