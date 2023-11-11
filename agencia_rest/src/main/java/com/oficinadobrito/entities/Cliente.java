package com.oficinadobrito.entities;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="tb_cliente")
public class Cliente extends Usuario implements Serializable{
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_cliente")
	private Integer id;
	
	private String RG;
	private String CPF;
	
	@Column(name="numero_viagens")
	private int numeroViagens;
	
	@Column(name="cartao_credito")
	private String cartaoCredito;
	
//	fk_user INTEGER,
	
}
