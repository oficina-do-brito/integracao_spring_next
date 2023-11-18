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
	public PacoteViagem updatePacoteViagem(Integer id,PacoteViagem p) {
		PacoteViagem pAntiga = pacoteRepository.getReferenceById(id);
		reparsarValoresAtualizados(pAntiga,p);
		return pacoteRepository.save(p);
	}
	public void deletePacoteViagem(Integer id) {
		this.pacoteRepository.deleteById(id);
	}
	
	
	private void reparsarValoresAtualizados(PacoteViagem pAntiga,PacoteViagem p) {
//		id_pacote ,titulo ,valor_desconto ,preco_total ,possui_hospedagem ,status ,meio_transporte,imagem ,prazo_cancelamento ,data_viagem fk_origem ,fk_hospedagem ,fk_carrinho 
	}

}
