import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';
import { join } from 'path';


const decompress = async () => {
    let compressedFilePath = join(import.meta.dirname, 'files', 'archive.gz');
    let destinationFilePath = join(import.meta.dirname, 'files', 'fileToCompress.txt');

    let sourceStream = createReadStream(compressedFilePath);

    let destinationStream = createWriteStream(destinationFilePath);

    let gunzipStream = createGunzip();


    await pipeline(
        sourceStream,
        gunzipStream,
        destinationStream
    );
};

await decompress();