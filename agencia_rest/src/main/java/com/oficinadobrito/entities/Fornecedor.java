package com.oficinadobrito.entities;

import java.io.Serial;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_fornecedor")
public class Fornecedor extends Usuario{
	@Serial
	private static final long serialVersionUID = 1L;

	private String CNPJ;
	
	@Column(name = "tipo_servico")
	private int tipoServico;
	
	@JsonIgnore
	@OneToMany(mappedBy = "fornecedor")
	private List<Passagem> passagem= new ArrayList<>();
	
	@JsonIgnore
	@OneToMany(mappedBy = "fornecedor")
	private List<Hospedagem> hospedagem= new ArrayList<>();


	public static long getSerialversionuid() {
		return serialVersionUID;
	}

}
