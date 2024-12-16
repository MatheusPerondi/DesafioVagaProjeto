package com.desafio.service;

import com.desafio.Dto.UserDto;
import com.desafio.Enum.NiveisPermissao;
import com.desafio.model.User;

import java.math.BigInteger;
import java.util.List;

public interface UserService {

    User salvar(UserDto dto);

    List<User> buscarTodos();

    User buscarPorId(BigInteger id);

    List<User> buscarPorNome(String nome);

    User edit(BigInteger id, UserDto dto);
}
