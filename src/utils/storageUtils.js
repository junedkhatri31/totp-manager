const fs = window.require('fs');

function createEmptyFile(path) {
    fs.writeFileSync(path, '[]', {encoding: 'utf8', flag: 'w'});
}

export { createEmptyFile }
