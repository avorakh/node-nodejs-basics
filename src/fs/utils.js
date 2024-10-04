import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { access } from 'fs/promises';

const currentDirectoryPath = () => {
    return dirname(fileURLToPath(import.meta.url));
};

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

export { currentDirectoryPath, isExistingPath };