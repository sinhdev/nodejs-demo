const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
// Use the async `crypto.scrypt()` instead.
const key = crypto.scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = crypto.createDecipheriv(algorithm, key, iv);

const input = fs.createReadStream('encrypt-file.enc');
const output = fs.createWriteStream('decrypt-file.js');

input.pipe(decipher).pipe(output);
