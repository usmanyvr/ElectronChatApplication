const { app, BrowserWindow, ipcMain, Notification} = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        backgroundColor: "red",
        webPreferences: {
            nodeIntegration: false,
            // contextIsolation is a feature that ensured that both, your preload scripts and Electrons internal logic run in separate contexts
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
            // will sanitize JS code
            /* worldSafeExecuteJavaScript: true,             */
        }
    });

    win.loadFile('index.html');
    /* win.webContents.openDevTools(); */
}

app.whenReady().then(() => {
    createWindow();
})

ipcMain.on('notify', (_, message) => {
    new Notification( {title: 'notify', body: message}).show()
})

if(isDev) {
    require('electron-reload')(__dirname, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    });
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length == 0) {
        createWindow();
    }
})

// Webpack -> is a module builder, main purpose is to bundle JS files for usage in the browser
// Babel -> is a JS compiler
