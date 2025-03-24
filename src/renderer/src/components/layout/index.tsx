import { Outlet } from "react-router-dom"
import Header from "../header"
import Configuracao from "../configuracao";

export default function Layout(){ 
    const configExists  = ""
    console.log('aqui');
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