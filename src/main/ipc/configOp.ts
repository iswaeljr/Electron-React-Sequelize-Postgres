import { app, BrowserWindow, ipcMain } from 'electron';
import fs from 'fs'
import { configPath } from '../database/config';
import { initializeDatabase } from '../database';

export function ConfigIpcHandlers(){

ipcMain.handle('save-config', (event, data) => {
    fs.writeFileSync(configPath, JSON.stringify(data, null, 4));

    // const configWindow = BrowserWindow.getFocusedWindow();
    // if (configWindow) {
    //     configWindow.close();
    // }
   
});

ipcMain.handle('get-config', () => {
    try {
        const data = fs.readFileSync(configPath, 'utf-8'); // Lê o conteúdo como string
        return JSON.parse(data); // Retorna os dados como JSON
    } catch (err) {
        console.error('Erro ao ler o config.json:', err);
        return { error: 'Arquivo de configuração não encontrado ou inválido!' };
    }
});

ipcMain.handle('check-database', async () => {
    
    const dbStatus = await initializeDatabase();
    return dbStatus.success; // Retorna true ou false
});

}