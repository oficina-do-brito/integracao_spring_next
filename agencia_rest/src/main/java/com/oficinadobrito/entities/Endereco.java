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
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_endereco")
public class Endereco implements Serializable {
	@Serial
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String CEP;
	
	private String estado;
	
	private String cidade;
	
	private String bairro;
	
	private String rua;
	
	private int numero;
	
	@JsonIgnore
	@OneToMany(mappedBy="endereco")
	private List<Usuario> usuarios= new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(mappedBy="endereco")
	private List<OrigemDestino> origem= new ArrayList<>();

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
