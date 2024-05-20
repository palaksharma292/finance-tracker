const crypto = require('crypto');

function generateSecret() {
    return crypto.randomBytes(32).toString('base64');
}

console.log(generateSecret());
