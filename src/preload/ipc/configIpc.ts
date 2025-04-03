import { ipcRenderer } from 'electron';

export const configIpc = {
    saveConfig: (data: Record<string, any>) => ipcRenderer.invoke('save-config', data),
    getConfig:  async () => { return await ipcRenderer.invoke('get-config') },
    configExists: async () => { return await ipcRenderer.invoke('check-database') }
}
