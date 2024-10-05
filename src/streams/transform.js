import { pipeline } from 'stream/promises';
import { Transform } from 'stream';
import { stdin, stdout } from 'process';

const transform = async () => {

    const reverseTextStream = new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            callback(null, reversedChunk);
        }
    });

    await pipeline(
        stdin,
        reverseTextStream,
        stdout
    );
};

await transform();