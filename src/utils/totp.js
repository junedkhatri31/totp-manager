import totp from 'totp-generator';

function generateTOTP(secret) {
    let paddLength = 8 - secret.length % 8;
    for (let i = 0; i < paddLength; i++) {
        secret += 'A';
    }
    return totp(secret);
}

export { generateTOTP }
