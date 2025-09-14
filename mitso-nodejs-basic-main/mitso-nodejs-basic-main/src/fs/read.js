const read = async () => {
    const fs = require('fs').promises;
    try {
        const data = await fs.readFile('files/fileToRead.txt', 'utf8');
        console.log(data);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();