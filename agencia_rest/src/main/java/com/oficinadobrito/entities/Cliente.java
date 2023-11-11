package com.oficinadobrito.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tb_cliente")
public class Cliente extends Usuario{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length=11)
	private String RG;
	
	@Column(length=14)
	private String CPF;
	
	@Column(name="numero_viagens")
	private int numeroViagens;
	
	@Column(name="cartao_credito")
	private String cartaoCredito;
	
//	fk_user INTEGER,
	
}
