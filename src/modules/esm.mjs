import { sep } from 'path';
import { release, version } from 'os';
import { createServer } from 'http';
import './files/c.js';
import * as dataA from './files/a.json' with { type: 'json' }; 
import * as dataB from './files/b.json' with { type: 'json' }; 

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = dataA;
} else {
    unknownObject = dataB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

const myServer = createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export {
    unknownObject,
    myServer,
};