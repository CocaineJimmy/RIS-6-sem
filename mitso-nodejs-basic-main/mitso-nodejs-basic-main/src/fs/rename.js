const rename = async () => {
    const fs = require('fs').promises;
    const oldPath = 'files/wrongFilename.txt';
    const newPath = 'properFilename.md';

    try {
        const oldFileExists = await fs.access(oldPath).then(() => true).catch(() => false);
        const newFileExists = await fs.access(newPath).then(() => true).catch(() => false);

        if (!oldFileExists || newFileExists) {
            throw new Error('FS operation failed');
        }

        await fs.rename(oldPath, newPath);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();