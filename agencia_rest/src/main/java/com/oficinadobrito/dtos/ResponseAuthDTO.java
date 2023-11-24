package com.oficinadobrito.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseAuthDTO{
    Integer id;
    String nome;
    String email;
    String telefone;
    String imagem;
    String autorizacoes;
    String token;

}