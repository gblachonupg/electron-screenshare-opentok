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


The main.js file juste create the express server

As you can see in the app/src/js/app.js, i use the same constraints in both my video elemnt an in opentok but in the video element, 
i get the screen display rather than in opentok, i have the user camera (default one i guess)
