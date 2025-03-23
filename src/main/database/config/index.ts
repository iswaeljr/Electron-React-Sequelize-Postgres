import { app } from 'electron'
import fs from 'fs'
import { join } from 'path'


const configPath = join(app.getPath('userData'), 'config.json');

// Verificar e criar o arquivo de configuração
function checkAndCreateConfig() {
    if (!fs.existsSync(configPath)) {
        const defaultConfig = {
            host: "localhost",
            port: 3306,
            user: "root",
            password: "",
            database: "mydb"
        };

        fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 4));
    }
}
function CarregarArquivoConfig(): any
{
    try {
        // Verificar se o arquivo existe
        if (fs.existsSync(configPath)) {
            // Ler o conteúdo do arquivo como string
            const data = fs.readFileSync(configPath, 'utf-8');
            // Parsear o JSON e retornar
            return JSON.parse(data);
        } else {
            console.warn('Arquivo config.json não encontrado.');
            return { error: 'Arquivo config.json não existe.' };
        }
    } catch (err) {
        console.error('Erro ao ler o arquivo config.json:', err);
        return { error: 'Erro ao acessar o arquivo de configuração.' };
    }
}

export { configPath, checkAndCreateConfig, CarregarArquivoConfig}