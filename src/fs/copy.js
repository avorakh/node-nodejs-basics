import { join } from 'path';
import { mkdir, cp } from 'fs/promises';
import { currentDirectoryPath, isExistingPath } from './utils.js'


const copy = async () => {
    let currentDir = currentDirectoryPath();

    let srcDir = join(currentDir, 'files');
    let destDir = join(currentDir, 'files_copy');
    
    let isSrcDirExist = await isExistingPath(srcDir);
    let isDestDirExist = await isExistingPath(destDir);

    if (!isSrcDirExist || isDestDirExist) {
        throw new Error('FS operation failed');
    } else {
        await mkdir(destDir, { recursive: true });

        await cp(srcDir, destDir, { recursive: true });
    }
};

await copy();
