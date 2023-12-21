const fs = require('fs');

// fs.readFileSync(Filename) = 동기적 => Blocking
// fs.readFile(Filename, Callback) = 비동기적 -> Non-Blocking

const ReadFileSync = fs.readFileSync(`Test.txt`)
console.log(ReadFileSync);
console.log(ReadFileSync.toString()); // File Data Output

fs.writeFileSync(`Test.txt`, `Test String`) // File Data Input
console.log(`TestFile String Data Save`);