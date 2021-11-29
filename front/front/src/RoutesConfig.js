import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Section from './components/Section';
import Home from './components/Home';
import CriarCliente from './components/CriarCliente';
import Editar from './components/editar';
import Login from './components/Login'
import Header from './components/Header';
import PrivateRoutes from './PrivateRoute';
import {
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet,
    // Redirect,
  } from 'react-router-dom';
import * as React from 'react';




const RoutesConfig = () => {
    return(
            <Routes>
                <Route exact path="/" element={<Login />}/>
                <Route element={<PrivateRoutes />}>
                    <Route exact path="/section" element={ <Section /> }/>
                    <Route exact path="/criar_cliente" element={ <CriarCliente /> }/>
                    <Route exact path="/editar/:id" element={<Editar />}/>
                </Route>
                <Route exact path="/home" element={ <Home /> }/>
                {/*<Route exact path="/home" element={ <Home /> }/>
                <Route exact path="/section" element={ <Section /> }/>
                <Route exact path="/criar_cliente" element={ <CriarCliente /> }/>
                <Route exact path="/editar/:id" element={<Editar />}/>*/}
            </Routes>
        
    );
}
export default RoutesConfig