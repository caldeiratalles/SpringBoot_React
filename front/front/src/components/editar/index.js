import React,{ useState, useEffect } from 'react';
import commom from '../../services/commom';
import { useParams } from 'react-router-dom';
import viacep from '../../services/viacep';
import Header from '../Header';
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './index.css';
function Retiracpf(cpf_old){
    var cpf = cpf_old.replaceAll("-","");
    var cpf = cpf.replaceAll(".","");
    return cpf;
}


function Editar(){
    let params = useParams();
    const navigation = useNavigate();
    let id_param = params.id
    //const [pessoa, setPessoa] = useState()
    const [pessoa, setPessoa] = useState({
        cep:"",
        cpf:"",
        nome:"",
        sobrenome:"",
        email:{email1:"",email2:""},
        endereco:{cep:"",bairro:"",cidade:"",complemento:"",logradouro:"",uf:""},
        telefone:{residencial:"",celular:"",comercial:""}
    })
    const [reload, setReload] = useState(false)
    
    const handleListPessoa = async () => {


        try {
            const response = await commom.get(`/cliente/${id_param}`);
            const pessoaRq = response.data;
            setPessoa(pessoaRq);
           

        } catch (error) {
            alert('Erro no acesso a API');
        }
    };
    //[executa algo apos fazer algo antes]
    useEffect(() => {
        handleListPessoa()
    }, [reload])






    const handleListEndereco = async () => {


        try {
            const response = await viacep.get(`/${pessoa.endereco.cep}/json`);
            const cep_data = response.data;
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
    const editar_pessoa = async () => {
        //console.log(id_p);
        try {
            //(path,body(tem que explicitar que está enviando um tipo de data),config) => axios
            const response = await commom.put('/cliente', pessoa);
            alert('Dados Atualizados');
            navigation("/section")
        } catch (error) {
            alert('Erro no acesso a API');
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(params.id);
        editar_pessoa();
    }


    return(
        <div className="header-master">
            <Header/>
            <div className="container-cliente">
                
    
                <div className="container--cliente">

                    <form onSubmit={handleSubmit}>
                        <div className="container--labels">
                            <label for="lname">CEP:</label>
                            <label for="fname">Primeiro nome:</label>
                            <label for="lname">Segundo nome:</label>
                            <label for="lname">CPF:</label>                        
                            <label for="lname">Logradouro:</label>
                            <label for="lname">Bairro:</label>
                            <label for="lname">Cidade:</label>
                            <label for="lname">UF:</label>
                            <label for="lname">Complemento:</label>
                            <label for="lname">Residencial:</label>
                            <label for="lname">Comercial:</label>
                            <label for="lname">Celular:</label>
                            <label for="lname">Email principal:</label>
                            <label for="lname">Email secundario:</label>
                            <button className="btn btn-primary btn-lg" onClick={handleListEndereco}>
                            Pesquisar CEP
                            </button>
                        </div>
    
                        <div className="container--inputs">
                            <InputMask type="text" id="CEP" name="CEP" mask="99999-999" value={pessoa.endereco?.cep} placeholder={pessoa.endereco?.cep} onChange={e => setPessoa({ ...pessoa, endereco:{...pessoa.endereco,cep:e.target.value}  })} required="required"/>
                            <input type="text" id="Primeiro" name="Primeiro"  pattern="[a-zA-Záãâéêíîóôõú0-9\s]+$" value={pessoa?.nome} placeholder={pessoa?.nome} onChange={e => setPessoa({ ...pessoa, nome: e.target.value })} required="required"/>
                            <input type="text" id="Segundo" name="Segundo" pattern="[a-zA-Záãâéêíîóôõú0-9\s]+$" value={pessoa?.sobrenome} placeholder={pessoa?.sobrenome} onChange={e => setPessoa({ ...pessoa, sobrenome: e.target.value })} required="required"/>
                            <InputMask type="text" id="CPF" name="CPF" mask="999.999.999-99" value={pessoa?.cpf} placeholder={pessoa?.cpf} onChange={e => setPessoa({ ...pessoa, cpf: Retiracpf(e.target.value) })} required="required"/>
                            <input type="text" id="Logradouro" name="Logradouro" value={pessoa.endereco?.logradouro} placeholder={pessoa.endereco?.logradouro} onChange={e => setPessoa({ ...pessoa, endereco:{...pessoa.endereco,logradouro:e.target.value} })}required="required"/>
                            <input type="text" id="Bairro" name="Bairro" value={pessoa.endereco?.bairro} placeholder={pessoa.endereco?.bairro} onChange={e => setPessoa({ ...pessoa, endereco:{...pessoa.endereco,bairro:e.target.value} })}required="required"/>
                            <input type="text" id="Cidade" name="Cidade" pattern="[a-zA-Záãâéêíîóôõú\s]+$" value={pessoa.endereco?.cidade}  placeholder={pessoa.endereco?.cidade} onChange={e => setPessoa({ ...pessoa, endereco: {...pessoa.endereco,cidade:e.target.value} })}required="required"/>
                            <input type="text" id="UF" name="UF" pattern="[a-zA-Záãâéêíîóôõú\s]+$" value={pessoa.endereco?.uf} placeholder={pessoa.endereco?.uf} onChange={e => setPessoa({ ...pessoa, endereco:{...pessoa.endereco,uf:e.target.value} })}required="required"/>
                            <input type="text" id="Complemento" name="Complemento"  value={pessoa.endereco?.complemento} placeholder={pessoa.endereco?.complemento} onChange={e => setPessoa({ ...pessoa, endereco:{...pessoa.endereco,complemento:e.target.value} })}/>
                            <InputMask type="text" id="Residencial" mask="9999-9999" name="Residencial" value={pessoa.telefone?.residencial} placeholder={pessoa.telefone?.residencial} onChange={e => setPessoa({ ...pessoa, telefone:{...pessoa.telefone,residencial:e.target.value.replaceAll("-","")} })}/>
                            <InputMask type="text" id="Comercial" mask="9999-9999" name="Comercial"  value={pessoa.telefone?.comercial} placeholder={pessoa.telefone?.comercial} onChange={e => setPessoa({ ...pessoa, telefone:{...pessoa.telefone,comercial:e.target.value.replaceAll("-","")} })}/>
                            <InputMask type="text" id="Celular" name="Celular" mask="9-9999-9999" value={pessoa.telefone?.celular} placeholder={pessoa.telefone?.celular} onChange={e => setPessoa({ ...pessoa, telefone:{...pessoa.telefone, celular:e.target.value.replaceAll("-","")} })}required="required"/>
                            <input type="email" id="Email principal" name="Email principal" value1={pessoa.email?.email1}  placeholder={pessoa.email?.email1} onChange={e => setPessoa({ ...pessoa, email:{...pessoa.email, email1:e.target.value} })}required="required" multiple/>
                            <input type="email" id="Email secundario" name="Email secundario" value={pessoa.email?.email2} placeholder={pessoa.email?.email2} onChange={e => setPessoa({ ...pessoa, email:{...pessoa.email, email2:e.target.value} })} multiple/>
                            <button className="btn btn-primary btn-lg ">
                            Atualizar Dados
                            </button>                       
                        </div>

                    </form> 
    
                </div>
            </div>
        </div>
        );

}

export default Editar