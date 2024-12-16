package com.desafio.mapper;

import com.desafio.Dto.UserDto;
import com.desafio.Enum.NiveisPermissao;
import com.desafio.model.User;

public class UserMapper {

    public static User fromDtoToEntity(UserDto dto, NiveisPermissao niveisPermissao){
        return User.builder()
                .id(dto.getId())
                .nome(dto.getNome())
                .username(dto.getUsername())
                .telefone(dto.getTelefone())
                .email(dto.getEmail())
                .ativo(dto.getAtivo())
                .senha(dto.getSenha())
                .nivelPermissao(niveisPermissao)
                .build();
    }
}
