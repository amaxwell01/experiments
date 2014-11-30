// change the opacity of the text
var paragraph = document.getElementsByTagName('p')[0];
var revealButton = document.getElementById('reveal');
var opacity = 0;

navigator.getUserMedia = (navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia);

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext();


// Get the value from the webRTC
navigator.getUserMedia({video: false, audio: true}, function(localMediaStream) {
    inputPoint = audioContext.createGain();

    // Create an AudioNode from the stream.
    realAudioInput = audioContext.createMediaStreamSource(localMediaStream);
    audioInput = realAudioInput;
    audioInput.connect(inputPoint);
},function(err) {
    console.log("The following error occured: " + err);
});

revealButton.addEventListener('click', function() {
    
    if (opacity < .9) {
        opacity += .1;
        paragraph.style.opacity = opacity;
    }
}, false);
