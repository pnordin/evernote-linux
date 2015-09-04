var TARGET_URL = 'https://www.evernote.com/Home.action';
var MIN_HEIGHT = 600;
var CONTAINER_WIDTH = 800;
var WINDOW_TITLE = 'Evernote';

// Initialize the main window
var gui = require('nw.gui');
var mainWindow = gui.Window.get();

// Setup tray and tray menu
var tray = new gui.Tray({ title: WINDOW_TITLE, icon: 'assets/logo.png' });
var trayMenu = new gui.Menu();
var trayExit = new gui.MenuItem({ type: 'normal', label: 'Exit' });
trayMenu.append(trayExit);
tray.menu = trayMenu;

var windowMinimized = false;
var windowHidden = true;

document.title = WINDOW_TITLE;

var view = document.getElementById('view');
view.src = TARGET_URL;

var loader = document.querySelector('.loader');

view.addEventListener('load', function () {   
    var winFrame = this.contentWindow;

    loader.className = 'loader hide';

    winFrame.onbeforeunload = function(e) {
        loader.className = 'loader';
    };

    winFrame.popup = function(url, title, w, h) {
        var oldHref = window.location.href;
        var win = gui.Window.open(url, { toolbar: false,
                                         position: 'center',
                                         title: title,
                                         width: w,
                                         height: h });

        win.on('close', function() {
            this.hide();
            this.close();
            window.location.href = oldHref;
        });

        return win;
    }
});

var changeWindowState = function() {
    if (windowMinimized) {
        mainWindow.restore();
        mainWindow.focus();
        windowMinimized = false;
    } else if (windowHidden) {
        mainWindow.show();
        mainWindow.focus();
        windowHidden = false;
    } else {
        mainWindow.hide();
        windowHidden = true;
    }
};

mainWindow.on('minimize', function() {
    windowMinimized = true;
});

mainWindow.on('close', function() {
    this.close(true);
});

tray.on('click', function() {
    changeWindowState();
});

trayExit.click = function() {
    mainWindow.close(true);
};
