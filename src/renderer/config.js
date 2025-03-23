const form = document.getElementById('configForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const configData = {
        host: document.getElementById('host').value,
        port: document.getElementById('port').value,
        user: document.getElementById('user').value,
        password: document.getElementById('password').value,
        database: document.getElementById('database').value
    };

    try {
        await window.api.config.saveConfig(configData);
        window.close();
    } catch (error) {
        console.error('Erro ao salvar configuração:', error);
        alert('Falha ao salvar configuração!');
    }
});
