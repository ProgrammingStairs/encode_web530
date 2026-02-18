// example showing the concept of events

var events = require("events");
// console.log(events);
var eventEmitterInstance = new events();

eventEmitterInstance.addListener("customEvent",function(){
    console.log("Event emits");
})

 eventEmitterInstance.emit("customEvent");