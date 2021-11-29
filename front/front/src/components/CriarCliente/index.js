import React,{ useState, useEffect } from 'react';
import common from '../../services/commom';
import viacep from '../../services/viacep';
import Header from '../Header';
import './index.css';
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

function Retiracpf(cpf_old){
    var cpf = cpf_old.replaceAll("-","");
    var cpf = cpf.replaceAll(".","");
    
    
    return cpf;
}
function CriarCliente(){
    const navigation = useNavigate();

    const [pessoa, setPessoa] = useState({
        cpf:"",
        nome:"",
        sobrenome:"",
        email:{email1:'',email2:''},
        endereco:{cep:"",bairro:"",cidade:"",complemento:"",logradouro:"",uf:""},
        telefone:{residencial:"",celular:"",comercial:""}
    })



    const handleListEndereco = async () => {


        try {
            const response = await viacep.get(`/${pessoa.endereco.cep}/json`);
            const cep_data = response.data;
            console.log(pessoa)
            const ceps = cep_data.cep.replace("-","");
            setPessoa(
                {
                    ...pessoa,
                    endereco:{
                    cep:ceps,
                    bairro:cep_data.bairro,
                    cidade:cep_data.localidade,
                    complemento:cep_data.complemento,
                    logradouro:cep_data.logradouro,
                    uf:cep_data.uf,
                    }
                }
            )

        } catch (error) {
            alert('Erro no acesso a API');
        }
    };

    

    const enviar = async () => {
        
        try {
            
            //setPessoa({
            //    ...pessoa, endereco:endereco, email:email,telefone:telefone
            //});
            await common.post('/cliente', pessoa);
            alert('Dados enviados');
            navigation("/section")
        } catch (error) {
            alert('Erro no acesso a API');
        }       
    };

    const handleSubmit = e => {
        e.preventDefault();
        enviar();
    }





    return(

        
        <div className="header-master">
            <Header />
        <div className="container-cliente">
            

            <div className="container--cliente">
                <button className="btns btn-primary btn-lg" onClick={handleListEndereco}>
                        Pesquisar CEP
                </button>
                <form onSubmit={handleSubmit}>
                    <div className="container--labels">
                        <label className="labels" for="lname">CEP:</label>                    
                        <label className="labels" for="lname">Primeiro nome:</label>
                        <label className="labels" for="lname">Segundo nome:</label>
                        <label className="labels" for="lname">CPF:</label>
                        
                        <label className="labels" for="lname">Logradouro:</label>
                        <label className="labels" for="lname">Bairro:</label>
                        <label className="labels" for="lname">Cidade:</label>
                        <label className="labels" for="lname">UF:</label>
                        <label className="labels" for="lname">Complemento:</label>
                        <label className="labels" for="lname">Residencial:</label>
                        <label className="labels" for="lname">Comercial:</label>
                        <label className="labels" for="lname">Celular:</label>
                        <label className="labels" for="lname">Email principal:</label>
                        <label className="labels" for="lname">Email secundario:</label>
                    </div>

                    <div className="container--inputs">
                        <InputMask type="text" id="CEP" name="CEP" mask="99999-999" value={pessoa.endereco.cep} onChange={e => setPessoa({ ...pessoa, endereco:{...pessoa.endereco,cep:e.target.value}  })} placeholder="" required="required" />
                        <input type="text" id="Primeiro" name="Primeiro" pattern="[a-zA-Záãâéêíîóôõú0-9\s]+$" value={pessoa.nome} placeholder="" onChange={e => setPessoa({ ...pessoa, nome: e.target.value })} placeholder="" required="required"/>
                        <input type="text" id="Segundo" name="Segundo" pattern="[a-zA-Záãâéêíîóôõú0-9\s]+$" value={pessoa.sobrenome} placeholder="" onChange={e => setPessoa({ ...pessoa, sobrenome: e.target.value })} placeholder="" required="required"/>
                        <InputMask type="text" id="CPF" mask="999.999.999-99" name="CPF" value={pessoa.cpf} placeholder="" onChange={e => setPessoa({ ...pessoa, cpf: Retiracpf(e.target.value) })} placeholder="" required="required"/>
                        <input type="text" id="Logradouro" name="Logradouro" value={pessoa.endereco.logradouro} placeholder="" onChange={e => setPessoa({ ...pessoa, endereco:{...pessoa.endereco,logradouro:e.target.value} })}required="required"/>
                        <input type="text" id="Bairro" name="Bairro" value={pessoa.endereco.bairro} placeholder="" onChange={e => setPessoa({ ...pessoa, endereco:{...pessoa.endereco,bairro:e.target.value} })}required="required"/>
                        <input type="text" id="Cidade" name="Cidade" pattern="[a-zA-Záãâéêíîóôõú\s]+$" value={pessoa.endereco.cidade} placeholder="" onChange={e => setPessoa({ ...pessoa, endereco: {...pessoa.endereco,cidade:e.target.value} })}required="required"/>
                        <input type="text" id="UF" name="UF" pattern="[a-zA-Záãâéêíîóôõú\s]+$" value={pessoa.endereco.uf} placeholder="" onChange={e => setPessoa({ ...pessoa, endereco:{...pessoa.endereco,uf:e.target.value} })}required="required"/>
                        <input type="text" id="Complemento"  name="Complemento"  value={pessoa.endereco.complemento} placeholder="" onChange={e => setPessoa({ ...pessoa, endereco:{...pessoa.endereco,complemento:e.target.value} })}/>
                        <InputMask type="text" id="Residencial" name="Residencial" mask="9999-9999" value={pessoa.telefone.residencial} placeholder="" onChange={e => setPessoa({ ...pessoa, telefone:{...pessoa.telefone,residencial:e.target.value.replaceAll("-","")} })}/>
                        <InputMask type="text" id="Comercial" name="Comercial"  mask="9999-9999" value={pessoa.telefone.comercial} placeholder="" onChange={e => setPessoa({ ...pessoa, telefone:{...pessoa.telefone,comercial:e.target.value.replaceAll("-","")} })}/>
                        <InputMask type="text" id="Celular" name="Celular" mask="9-9999-9999" value={pessoa.telefone.celular} placeholder="" onChange={e => setPessoa({ ...pessoa, telefone:{...pessoa.telefone, celular:e.target.value.replaceAll("-","")} })}required="required"/>
                        <input type="email" id="Email principal" name="Email principal"  value1={pessoa.email.email1}  placeholder="" onChange={e => setPessoa({ ...pessoa, email:{... pessoa.email,email1:e.target.value} })}required="required" multiple/>
                        <input type="email" id="Email secundario" name="Email secundario" value={pessoa.email.email2} placeholder="" onChange={e => setPessoa({ ...pessoa, email:{... pessoa.email,email2:e.target.value} })} multiple/>
                    </div>
                        <button className="btn btn-primary btn-lg ">
                        Enviar Dados
                    </button>
                </form> 

            </div>
        </div>
    </div>
    );
}
export default CriarCliente