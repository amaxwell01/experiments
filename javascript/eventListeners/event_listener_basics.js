// https://nodejs.org/api/events.html
const EventEmitter = require('events');

// Create a new class from the  EventEmitter object;
class MyEmitter extends EventEmitter {};

// Create a new emmiter from the  EventEmitter class;
const myEmitter = new MyEmitter();

// Add a new event object to fire against
myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.on('andrew', () => {
  console.log('an Andrew has occurred!');
});

// Fire a new event
myEmitter.emit('event');
myEmitter.emit('andrew');


// Remove your event listener once you use it
const mySecondMitter = new MyEmitter();
const myTestCallback = () => {
  console.log('my test has ran');
};

mySecondMitter.on('test', myTestCallback);
mySecondMitter.emit('test');
mySecondMitter.removeAllListeners('test', myTestCallback);

// This one never gets ran
mySecondMitter.emit('test', () => {
  console.log('test has been removed');
});
