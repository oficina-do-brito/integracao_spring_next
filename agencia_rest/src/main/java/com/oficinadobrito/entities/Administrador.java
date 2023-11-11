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
@Table(name="tb_administrador")
public class Administrador extends Usuario implements Serializable{
	private static final long serialVersionUID = 1L;


	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id_administrador")
	private Integer id;
	
	
	@Column(name="n_viagens_revisadas")
	private Integer nViagensRevisadas;

	public Administrador() {
		super();
	}
	
//	fk_user INTEGER,
	
}
