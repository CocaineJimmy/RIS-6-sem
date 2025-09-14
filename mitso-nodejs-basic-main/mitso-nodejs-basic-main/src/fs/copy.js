const fs = require('fs').promises;
const path = require('path');

const copy = async () => {
    const sourceDir = path.join(__dirname, 'files');
    const destDir = path.join(__dirname, 'files_copy');

    try {
        await fs.access(sourceDir);
    } catch (err) {
        throw new Error('FS operation failed');
    }

    try {
        await fs.access(destDir);
        throw new Error('FS operation failed');
    } catch (err) {

    }

    try {
        await fs.mkdir(destDir);
        const files = await fs.readdir(sourceDir);

        for (const file of files) {
            const srcFile = path.join(sourceDir, file);
            const destFile = path.join(destDir, file);
            await fs.copyFile(srcFile, destFile);
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await copy();
