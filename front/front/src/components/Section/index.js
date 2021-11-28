import React,{ useState, useEffect } from 'react';
import commom from '../../services/commom';
import { Link } from 'react-router-dom';
import Header from '../Header';

function Section(){
    //use state sempre no inicio
    const [pessoas, setPessoas] = useState([])
    const [reload, setReload] = useState(false)
    const handleListPessoa = async () => {


        try {
            const response = await commom.get('/cliente');
            const list = response.data;

            setPessoas(list);
            console.log();

        } catch (error) {
            alert('Erro no acesso a API');
        }
    };
    //[executa algo apos fazer algo antes]
    useEffect(() => {
        handleListPessoa()
    }, [reload])


    const delete_pessoa = async (id_req) => {

        //console.log(id_p);
        try {
            //(path,body(tem que explicitar que está enviando um tipo de data),config) => axios
            const response = await commom.delete('/cliente',{ data: { id:id_req } });
            setReload(!reload);
            
            console.log();
        } catch (error) {
            alert('Erro no acesso a API');
        }
    };


    
    return(
        <div className="container">
            <Header/>
            {pessoas.map(list => {
                return (
                    <div key={list.cpf}>
                        <hr/>
                        <p>Nome completo: {list?.nome} {list?.sobrenome}</p>
                        <p>CPF cliente: {list?.cpf}</p>
                        <p>CEP: {list?.endereco.cep}</p>
                        <p>logradouro: {list?.endereco.logradouro}</p>
                        <p>Bairro: {list?.endereco.bairro}</p>
                        <p>Cidade: {list?.endereco.cidade}</p>
                        <p>UF: {list?.endereco.uf}</p>
                        <p>Complemento: {list?.endereco.complemento}</p>
                        <p>Residencial: {list?.telefone.residencial}</p>
                        <p>Comercial: {list?.telefone.comercial}</p>
                        <p>Celular: {list?.telefone.celular}</p>
                        <p>Email principal: {list?.email.email1}</p>
                        <p>Email secundario: {list?.email.email2}</p>
                        <hr/>
                        <button className="btn btn-primary btn-lg" onClick={() => (delete_pessoa(list.id))}>
                            Deletar 
                        </button>
                        <button className="btn btn-primary btn-lg">
                            <Link to={`/editar/${list.id}`}>Editar Cliente</Link>
                        </button>
                        
                        <br/>
                    </div>
                )
            })}
        </div>
    )

}

export default Section;