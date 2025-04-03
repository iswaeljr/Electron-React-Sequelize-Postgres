import { Outlet } from "react-router-dom"
import Header from "../header"
import Configuracao from "../configuracao";
import { useEffect, useState } from "react";

export default function Layout(){ 
    
    const [configExists, setConfigExists] = useState<boolean | null>(null);
        
    useEffect(() => {
        const fetchDatabaseStatus = async () => {
            const status = await (window as any).api.config.configExists();
            setConfigExists(status); // Define o estado com base na conexão do banco
        };

        fetchDatabaseStatus();
    }, []);

    if (configExists === null) {
        return <body className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-700">Verificando sistema...</p>
        </div>
      </body>
      ; // Exibe um carregamento enquanto verifica
    }


    return (
        <>
            {configExists ? (
                <>
                    <Header />
                    <Outlet />
                </>
            ) : (
                <Configuracao />
            )}
        </>
    );
}