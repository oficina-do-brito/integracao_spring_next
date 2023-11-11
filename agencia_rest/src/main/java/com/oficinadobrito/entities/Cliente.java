package com.oficinadobrito.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "tb_cliente")
public class Cliente extends Usuario {
	private static final long serialVersionUID = 1L;

	@Column(length = 11)
	private String RG;

	@Column(length = 14)
	private String CPF;

	@Column(name = "numero_viagens")
	private int numeroViagens;

	@Column(name = "cartao_credito")
	private String cartaoCredito;
//	fk_user INTEGER,

	public Cliente() {
		super();
	}

	public Cliente(Integer id, String nome, String email, String password, String telefone, int tipoUser, String imagem,
			Date dataLogin, String RG, String CPF, int numeroViagens, String cartaoCredito) {
		super(id, nome, email, password, telefone, tipoUser, imagem, dataLogin);
		this.RG = RG;
		this.CPF = CPF;
		this.numeroViagens = numeroViagens;
		this.cartaoCredito = cartaoCredito;
	}

}
