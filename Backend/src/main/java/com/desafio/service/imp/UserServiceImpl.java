package com.desafio.service.imp;

import com.desafio.Dto.UserDto;
import com.desafio.Enum.NiveisPermissao;
import com.desafio.mapper.UserMapper;
import com.desafio.model.User;
import com.desafio.repository.UserRepository;
import com.desafio.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User salvar(UserDto dto) {
        validarQuantidadeUsuariosAtivos(dto);

        NiveisPermissao niveisPermissao = dto.getNivelPermissao();


        User user = UserMapper.fromDtoToEntity(dto, niveisPermissao);

        return userRepository.save(user);
    }

    @Override
    public List<User> buscarTodos() {
        return userRepository.findAll();
    }

    @Override
    public User buscarPorId(BigInteger id) {
        return getUser(id);
    }

    @Override
    public List<User> buscarPorNome(String nome) {
        return userRepository.findAll().stream()
                .filter(usuario -> usuario.getNome().toLowerCase().contains(nome.toLowerCase()))
                .toList();
    }



    @Override
    public User edit(BigInteger id, UserDto dto) {

        User usuario = getUser(id);

        if (dto.getAtivo() && !usuario.getAtivo()){
            validarQuantidadeUsuariosAtivos(dto);
        }


        dto.setId(id);
        return userRepository.save(UserMapper.fromDtoToEntity(dto, dto.getNivelPermissao()));
    }

    private void validarQuantidadeUsuariosAtivos(UserDto userDto) {
        if (userDto.getAtivo() == null || userDto.getAtivo() == false){
            userDto.setAtivo(false);
        } else {
            userDto.setAtivo(true);
        }


        if (userDto.getAtivo() && userRepository.countByAtivoTrue() >= 5) {
            throw new IllegalStateException("Máximo de 5 usuários ativos permitidos");
        }
    }

    private User getUser(BigInteger id){
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isEmpty()){
            throw new IllegalStateException("User nao encontrado");
        }
        return optionalUser.get();
    }
}
