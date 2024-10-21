import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import { join } from 'path';

const compress = async () => {
    let sourceFilePath = join(import.meta.dirname, 'files', 'fileToCompress.txt');

    let destinationFilePath = join(import.meta.dirname, 'files', 'archive.gz');

    let sourceStream = createReadStream(sourceFilePath);

    let destinationStream = createWriteStream(destinationFilePath);

    let gzipStream = createGzip();

    await pipeline(
        sourceStream,
        gzipStream,
        destinationStream
    );

};

await compress();