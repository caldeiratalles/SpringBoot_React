package br.com.surittec.cliente.controller.dto;

import br.com.surittec.cliente.modelo.Cliente;
import br.com.surittec.cliente.modelo.Email;
import br.com.surittec.cliente.modelo.Endereco;
import br.com.surittec.cliente.modelo.Telefone;

//não é exposta para o mundo externo
public class PessoaRs {
    private Long id;
    private String nome;
    private String sobrenome;
    private String cpf;
    private Endereco endereco;
    private Telefone telefone;
    private Email email;
    
    
    



	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public static PessoaRs converter(Cliente p){
        var pessoa = new PessoaRs();
        pessoa.setNome(p.getNome());
        pessoa.setSobrenome(p.getSobrenome());
        pessoa.setCpf(p.getCpf());
        pessoa.setId(p.getId());
        pessoa.setEndereco(p.getEndereco());
        pessoa.setTelefone(p.getTelefone());
        pessoa.setEmail(p.getEmail());
        return pessoa;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public Telefone getTelefone() {
		return telefone;
	}

	public void setTelefone(Telefone telefone) {
		this.telefone = telefone;
	}

	public Email getEmail() {
		return email;
	}

	public void setEmail(Email email) {
		this.email = email;
	}

    
}
