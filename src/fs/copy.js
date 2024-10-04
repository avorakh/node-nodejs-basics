import { join } from 'path';
import { mkdir, cp } from 'fs/promises';
import { isExistingPath } from './utils.js'


const copy = async () => {
    let srcDir = join(import.meta.dirname, 'files');
    let destDir = join(import.meta.dirname, 'files_copy');

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
