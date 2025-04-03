import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png'
import {initializeDatabase} from './database';
import { AllIpcHandlers } from './ipc';
import { createFileRoute, createURLRoute } from 'electron-router-dom';
import { checkAndCreateConfig } from './database/config';
import { ConfigIpcHandlers } from './ipc/configOp';

let mainWindow: BrowserWindow | null;

function createWindow(): void {
  // Create the browser window.
    mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,  
      contextIsolation: true, // Deve ser `true` para segurança e usar `contextBridge`
      nodeIntegration: false, // Desativado para evitar acesso direto a APIs Node.js
    }
  })

  
  mainWindow.on('ready-to-show', () => {
    mainWindow?.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  mainWindow.on('closed', () => {
    mainWindow = null; // Limpa a referência da janela
});

  const devServerUrl = createURLRoute(process.env['ELECTRON_RENDERER_URL']!, 'main')
  const fileRoute = createFileRoute(join(__dirname, '../renderer/index.html'), 'main')

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(devServerUrl)
  } else {
    mainWindow.loadFile(...fileRoute)
    
  }

  
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {

  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  // Inicialize o banco de dados
  try {

    const {success} = await initializeDatabase();

    if (success)
    {
      console.log('Banco de dados inicializado com sucesso!');
    
      ConfigIpcHandlers();
      AllIpcHandlers();
      createWindow();
  
      app.on('activate', function () {
        console.log('active')
        if (BrowserWindow.getAllWindows().length === 0 && mainWindow === null) {
          createWindow(); // Cria apenas se não houver janelas abertas
      }
      })

    }
    else
    {
      checkAndCreateConfig();
      ConfigIpcHandlers();
      createWindow();
    }
    
   
    
  } catch (error) {
   

    //console.error('Erro ao inicializar o banco de dados:', error);
  }
})


// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})
