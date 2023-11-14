package com.oficinadobrito.entities;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

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
	
	public String getRG() {
		return RG;
	}

	public void setRG(String rG) {
		RG = rG;
	}

	public String getCPF() {
		return CPF;
	}

	public void setCPF(String cPF) {
		CPF = cPF;
	}

	public int getNumeroViagens() {
		return numeroViagens;
	}

	public void setNumeroViagens(int numeroViagens) {
		this.numeroViagens = numeroViagens;
	}

	public String getCartaoCredito() {
		return cartaoCredito;
	}

	public void setCartaoCredito(String cartaoCredito) {
		this.cartaoCredito = cartaoCredito;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
