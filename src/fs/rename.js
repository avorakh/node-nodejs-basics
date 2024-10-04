import { join } from 'path';
import { rename as rnm } from 'fs/promises';
import { currentDirectoryPath, isExistingPath } from './utils.js'


const rename = async () => {
    let currentDir = currentDirectoryPath();

    let oldFilePath = join(currentDir, 'files', 'wrongFilename.txt');
    let newFilePath = join(currentDir, 'files', 'properFilename.md');

    let isOldFilePathExist = await isExistingPath(oldFilePath);
    let isNewFilePathExist = await isExistingPath(newFilePath);

    if (isOldFilePathExist && !isNewFilePathExist) {
        await rnm(oldFilePath, newFilePath)
    } else {
        throw new Error('FS operation failed');
    }
};

await rename();