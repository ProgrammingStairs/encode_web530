// example showing the concept of events

var events = require("events");
var eventEmitter = new events();
var fun1 = function(){
    console.log("Custom events emits fun 1");
}
var fun2 = function(){
    console.log("Custom events emits fun 2");
}
var fun3 = function(){
    console.log("Custom events emits fun 3");
}
eventEmitter.on("customEvent",fun1);
eventEmitter.on("customEvent",fun2);
eventEmitter.on("customEvent1",fun3);

eventEmitter.removeListener("customEvent",fun2);

eventEmitter.emit("customEvent");
eventEmitter.emit("customEvent1");

var arr1 = eventEmitter.listeners("customEvent");
console.log("No. of events (customEvent) : "+arr1.length);

var arr2 = eventEmitter.listeners("customEvent1");
console.log("No. of events (customEvent1) : "+arr2.length);
