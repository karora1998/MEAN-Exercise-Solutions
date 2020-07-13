let events = require('events');

function getEmitter() {    
    console.log("I am getEmitter method")
    var emitter = new events.EventEmitter();
    process.nextTick(function() {
        console.log("Emitting start event")
        emitter.emit('start');
    });
    return emitter;
}
var myEmitter = getEmitter();// execution starts here
process.stdin.on('readable',  ()=> {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write('You typed : ' + chunk);
    }
});

myEmitter.on('start', function() {
    console.log('Started');
})


