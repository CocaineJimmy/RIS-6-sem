const { Transform } = require('stream');

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            callback(null, reversedChunk);
        }
    });

    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();