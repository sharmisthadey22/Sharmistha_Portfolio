// function abc() {
//     console.log("abc function called");
// }

// const { once } = require('cluster');
// const { eventNames } = require('process');
// abc();
// abc();

//on

// const EventEmitter = require('events');
// const event = new EventEmitter();

// event.on('greeet', (name,age)=>{
//     console.log(`Hello ${name}, you are ${age} years old!`);
// })
// event.on('greeet', (name,age)=>{
//     console.log(`Hello ${name}, you are ${age} years old!`);
// })



// event.emit('greet',"sharmistha",30);
// event.emit('greet',"sharmistha",30);

//once

// const EventEmitter = require('events');
// const event = new EventEmitter()


// event.once('onlyOnce', function () {
//     console.log('এটি একবারই রান করবে');
// });
// // event.once('onlyOnce', function () {
// //         console.log("This event will only be triggered once.");
// //     });
// event.emit('onlyOnce');
// event.emit('onlyOnce');
    
// //Event removelListener


// const callBackEvent = (name, age) =>{
//     console.log(`Hello ${name} you are ${age} years old!`);
// }
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();



// eventEmitter.on('removeListener', callBackEvent)
// const event = new EventEmitter()

// event.on('removeListener', callBackEvent);
// event.removeListener('removeListener', callBackEvent);
// event.emit('removeListener', name="sharmistha dey", age=30);