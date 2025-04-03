import { Link } from "react-router-dom";

export default function Configuracao() {
    
    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Configuração do Banco de Dados</h1>
                <form id="configForm" className="space-y-4">
                    {/* Host */}
                    <div>
                        <label htmlFor="host" className="block text-sm font-medium text-gray-600">Host:</label>
                        <input
                            type="text"
                            id="host"
                            name="host"
                            defaultValue="localhost"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Porta */}
                    <div>
                        <label htmlFor="port" className="block text-sm font-medium text-gray-600">Porta:</label>
                        <input
                            type="number"
                            id="port"
                            name="port"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Usuário */}
                    <div>
                        <label htmlFor="user" className="block text-sm font-medium text-gray-600">Usuário:</label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                            defaultValue="postgres"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Senha */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            defaultValue="123456"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Banco de Dados */}
                    <div>
                        <label htmlFor="database" className="block text-sm font-medium text-gray-600">Banco de Dados:</label>
                        <input
                            type="text"
                            id="database"
                            name="database"
                            defaultValue="mydb"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>

                    {/* Botão */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Salvar
                    </button>
                </form>
                <div className="justify-center">
                    <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                    Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
