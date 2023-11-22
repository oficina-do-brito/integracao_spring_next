package com.oficinadobrito.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serial;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="tb_passagem")
public class Passagem implements Serializable {
	@Serial
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String titulo;
	
	private double preco;
	
	private int tipo;
	
	
	@ManyToOne()
	@JoinColumn(name="fk_fornecedor")
	private Fornecedor fornecedor;
	
	
	@ManyToOne()
	@JoinColumn(name="fk_pacote")
	private PacoteViagem pacote;

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
