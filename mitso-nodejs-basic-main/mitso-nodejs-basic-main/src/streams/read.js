const read = async () => {
    const fs = require('fs');
    const stream = fs.createReadStream('files/fileToRead.txt');
    stream.pipe(process.stdout);
};

await read();