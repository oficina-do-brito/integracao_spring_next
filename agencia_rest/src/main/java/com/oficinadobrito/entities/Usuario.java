package com.oficinadobrito.entities;

import java.io.Serializable;
import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Inheritance(strategy = InheritanceType.JOINED)
@Entity
@Table(name = "tb_users", uniqueConstraints = { @UniqueConstraint(name = "un_email", columnNames = { "email" }) })
public class Usuario implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	private String nome;

	private String email;

	private String password;

	private String telefone;

	@Column(name = "tipo_user")
	private int tipoUser;

	private String imagem;

	@Column(name = "data_login")
	private Date dataLogin;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="fk_endereco")
	private Endereco endereco;
	
	public Usuario() {
		super();
	}

	public Usuario(Integer id, String nome, String email, String password, String telefone, int tipoUser, String imagem,
			Date dataLogin, Endereco endereco) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.password = password;
		this.telefone = telefone;
		this.tipoUser = tipoUser;
		this.imagem = imagem;
		this.dataLogin = dataLogin;
		this.endereco = endereco;
	}

	public Endereco getEndereco() {
		return endereco;
	}

	public void setEndereco(Endereco endereco) {
		this.endereco = endereco;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public int getTipoUser() {
		return tipoUser;
	}

	public void setTipoUser(int tipoUser) {
		this.tipoUser = tipoUser;
	}

	public String getImagem() {
		return imagem;
	}

	public void setImagem(String imagem) {
		this.imagem = imagem;
	}

	public Date getDataLogin() {
		return dataLogin;
	}

	public void setDataLogin(Date dataLogin) {
		this.dataLogin = dataLogin;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
}
