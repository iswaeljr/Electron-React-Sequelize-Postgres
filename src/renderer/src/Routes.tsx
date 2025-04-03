import { Router, Route } from 'electron-router-dom'
import Home from "./pages/home";
import Vendas from "./pages/venda";
import Layout from './components/layout';
import Configuracao from './components/configuracao';


export default function Routes(){
    
    return(
        <Router
        main={
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>} />            
                <Route path='/venda' element={<Vendas operador={"Ismael Araujo"} loja={"Taco Boulevard"} terminal={1}/>} />
                <Route path="/configuracao" element={<Configuracao />} />
            </Route>
        }
        />
    )
}