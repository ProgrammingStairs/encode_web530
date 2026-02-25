// example showing the concept of events

var events = require("events");
class MyEvent extends events{}

const eventEmitter = new MyEvent();
eventEmitter.on('customEvent',()=>{
    console.log("This is an example of events in nodejs");
});

eventEmitter.emit('customEvent');