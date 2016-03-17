const BrowserWindow = require('electron').remote.BrowserWindow;

function previewFunc(clicked_alt, clicked_name) {
    var win = new BrowserWindow({ width: 800, height: 600, show: false });
    win.on('closed', function() {
    win = null;

});

win.loadURL(clicked_alt);
win.setMenu(null);
win.show();

    };
