# electron-screenshare-opentok

Here are my version of :
 - npm 3.10.3
 - node 6.5.0

Install

- npm install in root
- npm install in app
- webpack in app

To launch the sample app : electron app in root

You should add your opentok credential in app/src/js/app.js

var OT_API_KEY = "";
var OT_SESSION_ID = "";
var OT_TOKEN = "";



The main.js just creates the electron window and start the express server.

As you can see in the app/src/js/app.js, i use the same constraints in both my video elemnt an in opentok but in the video element, 
i get the screen display rather than in opentok, i have the user camera (default one i guess)
