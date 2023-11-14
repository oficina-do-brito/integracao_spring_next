package com.oficinadobrito.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_administrador")
public class Administrador extends Usuario {
	private static final long serialVersionUID = 1L;

	@Column(name = "n_viagens_revisadas")
	private Integer nViagensRevisadas;

//	fk_user INTEGER,
	public Administrador() {
		super();
	}
	
	public Administrador(Integer id, String nome, String email, String password, String telefone, int tipoUser,
			String imagem, Date dataLogin, Endereco endereco) {
		super(id, nome, email, password, telefone, tipoUser, imagem, dataLogin, endereco);
		// TODO Auto-generated constructor stub
	}


	public Integer getnViagensRevisadas() {
		return nViagensRevisadas;
	}

	public void setnViagensRevisadas(Integer nViagensRevisadas) {
		this.nViagensRevisadas = nViagensRevisadas;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

}
