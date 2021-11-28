import React,{ useState, useEffect } from 'react';
import './index.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';




function Login (handleListPessoa){
  const navigation = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  
  const handleLogin = async () => {
      const data = { email, senha };
      try {
          const response = await axios.create({ baseURL: 'http://localhost:8080'}).post("/auth", data);
          localStorage.setItem("token", response.data.token)
          localStorage.setItem("email", email)
          alert("Login com sucesso");
          navigation("/home")
          
          
        } catch (error) {
          alert("Erro no acesso a API");
        }
    }





    return(  
            <div className="login">
                <h1>Login</h1>
                <div className="form" >
                    <input type="email" name="u" placeholder="Username" required="required" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" name="p" placeholder="Password" required="required" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    <button class="btn btn-primary btn-block btn-large" onClick={handleLogin}>Logar</button>
                </div>
            </div>
            
      );
}

export default Login;