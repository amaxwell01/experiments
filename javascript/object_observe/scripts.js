var beingWatched = {};

// Define callback function to get notified on changes
var somethingChanged = function( changes ) {
    console.log( changes );
};

// When the object 'beingWatched’ is modified, it will trigger the 
// callback function 'somethingChanged’ which receives an array of 
// changes that were applied to the object.
Object.observe( beingWatched, somethingChanged );
