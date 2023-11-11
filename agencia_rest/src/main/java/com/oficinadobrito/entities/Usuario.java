package com.oficinadobrito.entities;

import java.io.Serializable;
import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.Data;

@Data
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

//	fk_endereco

	public Usuario() {
		super();
	}

	public Usuario(Integer id, String nome, String email, String password, String telefone, int tipoUser, String imagem,
		Date dataLogin) {
		super();
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.password = password;
		this.telefone = telefone;
		this.tipoUser = tipoUser;
		this.imagem = imagem;
		this.dataLogin = dataLogin;
	}
}
