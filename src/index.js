const { app, Tray, Menu, BrowserWindow } = require('electron');
const path = require('path')
if (require('electron-squirrel-startup')) {
  app.quit();
}


let tray = null;
let window = null;
app.whenReady().then(function () {
  tray = new Tray(path.join(__dirname, '/icon.png'))


  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'sigin', type: 'normal', click: () => {
        window = new BrowserWindow({ width: 800, height: 300, x: 0, y: 0 });
        window.loadURL('www.google.com');

        window.on('closed', () => {
          window = null;
        })
      }
    },
    { type: 'separator' },
    {
      label: 'sair', type: 'normal', click: (menu) => {
        console.log("Sainda com o comando " + menu.label)
        
      }
    },
  ])

  tray.setToolTip("Esperando notificações da 42.");
  tray.setContextMenu(contextMenu)

  // mainWindow = new BrowserWindow({ show: false });
  
}).catch((err) => console.log(err));


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

