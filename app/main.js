var express = require('express');
var logger = require('morgan');
const {app, autoUpdater, BrowserWindow, dialog, Menu, Tray} = require('electron')

let win;

function startExpress()
{
  var app = express();

  app.use(logger('combined'));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.static(__dirname + '/public'));

  app.get('/', function(req, res) {
    res.render(__dirname + '/views/index.ejs');
  });

  app.listen(3000);
}

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600});

  win.webContents.openDevTools();
  win.setMenu(null);

  win.loadURL('http://localhost:3000/');
  
  win.on('close', function(event) {
    if (!app.isQuiting) {
      event.preventDefault()
      win.hide();
    }
  });

  win.on('minimize',function(event) {
  });
}

var shouldQuit = app.makeSingleInstance(function(commandLine, workingDirectory) {
  if (win) {
    if (win.isMinimized()) win.restore();
    win.focus();
  }
});

if (shouldQuit) {
  app.quit();
  return;
}

app.on('ready', function() {
  startExpress();
  createWindow();
});
 

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
})

