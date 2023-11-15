package com.oficinadobrito.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_cliente")
public class Cliente extends Usuario implements Serializable{
	private static final long serialVersionUID = 1L;
	
	@Column(length = 11)
	private String RG;

	@Column(length = 14)
	private String CPF;

	@Column(name = "numero_viagens")
	private int numeroViagens;

	@Column(name = "cartao_credito")
	private String cartaoCredito;
	
	
	@OneToOne(fetch = FetchType.LAZY, mappedBy="cliente")
	private CarrinhoCompra carrinho;
	
	
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


	public CarrinhoCompra getCarrinho() {
		return carrinho;
	}


	public void setCarrinho(CarrinhoCompra carrinho) {
		this.carrinho = carrinho;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
