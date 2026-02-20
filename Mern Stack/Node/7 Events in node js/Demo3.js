// example showing the concept of events

var events = require("events");
var eventEmitter = new events();

var fun1 = function(){
    console.log("Custom events emits");
}

eventEmitter.on("customEvent",fun1);
eventEmitter.on("customEvent",fun1);
eventEmitter.on("customEvent",fun1);

eventEmitter.emit("customEvent");
