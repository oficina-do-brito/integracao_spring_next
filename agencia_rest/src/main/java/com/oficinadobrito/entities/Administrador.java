package com.oficinadobrito.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
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
			String imagem, Date dataLogin,Integer nViagensRevisadas) {
		super(id, nome, email, password, telefone, tipoUser, imagem, dataLogin);
		this.nViagensRevisadas = nViagensRevisadas;
	}

}
