package br.com.surittec.cliente.controller.dto;

import br.com.surittec.cliente.modelo.Email;
import br.com.surittec.cliente.modelo.Endereco;
import br.com.surittec.cliente.modelo.Telefone;

//usada pelo front-end
public class PessoaRq {

    private String nome;
    private String sobrenome;
    private Integer cpf;
    private Endereco endereco;
    private Telefone telefone;
    private Email email;
    private String id;
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
	public Integer getCpf() {
		return cpf;
	}
	public void setCpf(Integer cpf) {
		this.cpf = cpf;
	}
	public Endereco getEndereco() {
		return endereco;
	}
	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
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
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
    
    

}
