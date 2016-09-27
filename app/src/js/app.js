var screenshare = require('rtc-screenshare')({
  chromeExtension: 'rtc.io screenshare',
  version: '^1.0.0'
});

var OT_API_KEY = "";
var OT_SESSION_ID = "";
var OT_TOKEN = "";

window.addEventListener('load', function () {
  
  const session = OT.initSession(OT_API_KEY, OT_SESSION_ID);
  session.on('streamCreated', function (event) {
    session.subscribe(event.stream, function (err) {
      if (err) alert(err.message);
    });
  });

  navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

  screenshare.request(function(err, constraints) {
    if (err)
      return console.error('Could not capture: ', error);
    console.log('Constraints: ', constraints);

    navigator.getUserMedia(constraints, function (stream) {
        // We attach constraints to videoElement
        var videoElement = document.getElementById('screenPublisherVideo');
        videoElement.src = URL.createObjectURL(stream);
    }, function (err) {
        console.log(err);
    })

    // We try to init a publisher with the screenshare constraints, but the publisher uses the camera
    var publisher = OT.initPublisher("screenPublisher", constraints, function(err) {
      if (err)
        console.log('OT.initPublisher error: ', err);
      else
        console.log('Publisher Initialized');
      }); 
  });
});