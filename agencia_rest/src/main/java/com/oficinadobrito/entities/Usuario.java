package com.oficinadobrito.entities;

import java.io.Serializable;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
@Data
@Entity
@Table(name="tb_users")
public class Usuario implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_user")
	private Integer id;
	
	private String nome;
	
	private String email;
	
	private String password;
	
	private String telefone;
	
	@Column(name="tipo_user")
	private int tipoUser;
	
	private String imagem;
	
	@Column(name="data_login")
	private LocalDate dataLogin;
	
//	fk_endereco

	public Usuario() {
		super();
	}

}
