import { join } from 'path';
import { writeFile } from 'fs/promises';
import { isExistingPath } from './utils.js'


const content = 'I am fresh and young';


const create = async () => {
    let filePath = join(import.meta.dirname, 'files', 'fresh.txt');

    let isExistingFile = await isExistingPath(filePath);

    if (isExistingFile) {
        throw new Error('FS operation failed');
    } else {
        await writeFile(filePath, content);
    }
};

await create();