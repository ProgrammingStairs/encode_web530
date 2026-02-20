// example showing the concept of events

var events = require("events");
var eventEmitter = new events();

// eventEmitter.on("customEvent",function(){
//     console.log("Custom events emits");
// });

eventEmitter.once("customEvent",function(){
    console.log("Custom events emits");
});

eventEmitter.emit("customEvent");
eventEmitter.emit("customEvent");
eventEmitter.emit("customEvent");
eventEmitter.emit("customEvent");
eventEmitter.emit("customEvent");
