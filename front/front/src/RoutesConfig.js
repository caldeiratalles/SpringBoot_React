import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Section from './components/Section';
import Home from './components/Home';
import CriarCliente from './components/CriarCliente';
import Editar from './components/editar';
import Login from './components/Login'
import Header from './components/Header';
import PrivateRoutes from './PrivateRoute';

const publicRoute = () =>{
    <>
        <Header/>
        {/*<Route exact path="/home" element={
        <PrivateRoutes>
            <Home />
        </PrivateRoutes>
        }/>*/}
        {/*<Route exact path="/home" element={ <Home /> }/>
        <Route exact path="/section" element={ <Section /> }/>
        <Route exact path="/criar_cliente" element={ <CriarCliente /> }/>
        <Route exact path="/editar/:id" element={<Editar />}/>*/}
    </>
}


const RoutesConfig = () => {
    return(
        <Routes>
            <Route exact path="/" element={<Login />}/>
            <Route exact path="/home" element={ <Home /> }/>
            <Route exact path="/section" element={ <Section /> }/>
            <Route exact path="/criar_cliente" element={ <CriarCliente /> }/>
            <Route exact path="/editar/:id" element={<Editar />}/>
        </Routes>
        
    );
}
export default RoutesConfig