package com.oficinadobrito.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import java.io.Serial;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_cliente")
public class Cliente extends Usuario{
	@Serial
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

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
