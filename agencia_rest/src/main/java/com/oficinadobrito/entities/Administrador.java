package com.oficinadobrito.entities;

import java.io.Serial;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "tb_administrador")
public class Administrador extends Usuario {
	@Serial
	private static final long serialVersionUID = 1L;

	@Column(name = "n_viagens_revisadas")
	private Integer nViagensRevisadas;
	
	@JsonIgnore
	@ManyToMany()
	@JoinTable(name = "revisa", joinColumns = @JoinColumn(name = "fk_administrador"), inverseJoinColumns = @JoinColumn(name = "fk_pacote_viagem"))
	private List<PacoteViagem> pacotes = new ArrayList<>();
	
	public Administrador() {
		super();
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
