const remove = async () => {
    const fs = require('fs').promises;
    try {
        await fs.unlink('files/fileToRemove.txt');
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await remove();