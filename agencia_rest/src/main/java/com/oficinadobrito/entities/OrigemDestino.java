package com.oficinadobrito.entities;

import java.io.Serial;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_origem_destino")
public class OrigemDestino implements Serializable {
	@Serial
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String nome;
	private String imagem;
	private String descricao;
	private int tipo;
	
	
	@ManyToOne()
	@JoinColumn(name="fk_endereco")
	private Endereco endereco;
	
	@JsonIgnore
	@OneToMany(mappedBy = "origem")
	private List<PacoteViagem> pacotes= new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "origem")
	private List<Hospedagem> hospedagem= new ArrayList<>();

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
