import { join } from 'path';
import { readdir } from 'fs/promises';
import { currentDirectoryPath, isExistingPath } from './utils.js'


const list = async () => {
    let currentDir = currentDirectoryPath();
    let fileSFolderPath = join(currentDir, 'files');

    let isExistingFFolder = await isExistingPath(fileSFolderPath);

    if (isExistingFFolder) {
        let files = await readdir(fileSFolderPath);
        files.forEach(file => {
            console.log(file);
        });
    } else {
        throw new Error('FS operation failed');
    }
};

await list();