import React,{ useState, useEffect } from 'react';
import suri from '../../img/Header/1634473158365.png';
import login_img from '../../img/Header/login.png';
import { Link } from 'react-router-dom';
import './index.css';




function Header(handleListPessoa){




    return(
        <div className="container">
            <div className="container--header">
                <div className="img--suri--header">
                    <a href="/"><img className="img--suri" src={suri} alt="logo-suri"></img></a>
                </div>
                
                <div className="links--header">
                    <ul>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/section'>Todos clientes</Link></li>
                        <li><Link to="/criar_cliente">Criar cliente</Link></li>
                    </ul>
                </div>
                <div className="login--header">
                    <a href="/"><img className="login" src={login_img}></img></a>
                </div>
                {/*<Link className="btn btn-primary btn-lg" to="/home">
                    Acessar Dashboard
                </Link>*/}
            </div>
        </div>
    );
}

export default Header;