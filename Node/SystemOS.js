const os = require('os');

console.log(`OS Information`);
console.log(`1. Arch =`, os.arch());
console.log(`2. Platform =`, os.platform());
console.log(`3. Type =`, os.type());
console.log(`4. Uptime =`, os.uptime());
console.log(`5. Hostname =`, os.hostname());
console.log(`6. Release =`, os.release());

console.log(`OS Direktory`);
console.log(`1. Homedir =`, os.homedir());
console.log(`2. Tmpdir =`, os.tmpdir());

console.log(`CPU Information`);
console.log(`1. CPU =`, os.cpus());
console.log(`2. CPU.length =`, os.cpus().length);

console.log(`Memory Information`);
console.log(`1. Freemem =`, os.freemem());
console.log(`2. Totalmem =`, os.totalmem());