const EventEmitter = require('events'); // Event Module
const Process = require('process');

class MainEmitter extends EventEmitter {}

// Event Handler Connection
const MainEvent = new MainEmitter()
MainEvent.on(`event`, () => { console.log(`Event connect`) })
MainEvent.emit('event')

//----------------------------------------------------------------

Process.on('uncaughtException', () => { console.log(`Error`); })
Process.on(`exit`, () => { console.log(`Process Exit`); })

// Error Event
// error.error.error()