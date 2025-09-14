import fs from 'fs';
import crypto from 'crypto';

const calculateHash = async () => {
    const fileName = 'src/hash/files/fileToCalculateHashFor.txt';
    const fileBuffer = fs.readFileSync(fileName);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    const hex = hashSum.digest('hex');
    console.log(hex);
};

await calculateHash();
