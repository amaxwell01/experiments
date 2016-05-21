var element = document.getElementById("SomeElementYouWantToAnimate");
var start = null;

function step(timestamp) {
  var progress = null;
  if (!start) {
    start = timestamp;
    console.log('Start: ', start);
  }

  // Show the current timestamp
  console.log('Timestamp: ', timestamp);

  // Update the progress to show the delta between the timestam and start time
  progress = (timestamp - start);
  console.log('Progress: ', progress);

  // Update the left position
  element.style.left = Math.min(progress / 10, 200) + "px";

  // Keep running the requestAnimationFrame until it reaches 2 seconds
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

/*
 * requestAnimationFrame only accepts a single callback with a single return
 * value.
 * A parameter specifying a function to call when it's time to update your
 * animation for the next repaint. The callback has one single argument,
 * a DOMHighResTimeStamp, which indicates the current time
 * (the time returned from Performance.now() ) for when requestAnimationFrame
 * starts to fire callbacks.
*/
window.requestAnimationFrame(step);
