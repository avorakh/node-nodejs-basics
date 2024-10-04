import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { access, writeFile } from 'fs/promises';


const content = 'I am fresh and young';

const currentDirectoryPath = () => {
    return dirname(fileURLToPath(import.meta.url));
}

const isExistingPath = async (filePath) => {
    try {
        await access(filePath);
        return true;
    } catch (err) {
        if (err.code === 'ENOENT') {
            return false;
        }
        throw err;
    }
};

const create = async () => {
    let currentDir = currentDirectoryPath();
    let filePath = join(currentDir, 'files', 'fresh.txt');

    let isExistingFile = await isExistingPath(filePath);

    if (isExistingFile) {
        throw new Error('FS operation failed');
    } else {
        await writeFile(filePath, content);
    }
};

await create();