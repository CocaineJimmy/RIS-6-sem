const list = async () => {
    const fs = require('fs').promises;
    const path = 'files';
    try {
        const files = await fs.readdir(path);
        console.log(files);
    } catch (error) {
        console.error('FS operation failed');
    }
};

await list();