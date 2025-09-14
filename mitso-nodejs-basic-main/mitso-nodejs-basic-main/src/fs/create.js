const fs = require('fs').promises;

const create = async () => {
    try {
        const filePath = 'files/fresh.txt';
        await fs.writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();