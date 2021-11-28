package br.com.surittec.cliente.modelo;


import java.io.Serializable;

import javax.persistence.*;
import javax.validation.constraints.Size;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;


@Entity
@Table(name = "Cliente")
public class Cliente implements Serializable{
	private static final long serialVersionUID = 1L;
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Long id;
    
    @Size(min = 3, max = 100)
    private String nome;
    @Size(min = 3, max = 100)
    private String sobrenome;

    private String cpf;

    @OnDelete(action = OnDeleteAction.CASCADE)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private Endereco endereco;
    
    @OnDelete(action = OnDeleteAction.CASCADE)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "telefone_id", referencedColumnName = "id")
    private Telefone telefone;
    
    @OnDelete(action = OnDeleteAction.CASCADE)
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "email_id", referencedColumnName = "id")
    private Email email;
    
    
    

  
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

















	public static long getSerialversionuid() {
		return serialVersionUID;
	}

















	public Cliente() {}
}
