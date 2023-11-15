package com.oficinadobrito.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.oficinadobrito.entities.PacoteViagem;
import com.oficinadobrito.repositories.PacoteViagemRepository;

@Service
public class PacoteViagemService {
	@Autowired
	private PacoteViagemRepository pacoteRepository;

	public List<PacoteViagem> findAll() {
		List<PacoteViagem> pacotes = this.pacoteRepository.findAll();
		return pacotes;
	}
	public PacoteViagem savePacoteViagem(PacoteViagem p) {
		return pacoteRepository.save(p);
	}

}
