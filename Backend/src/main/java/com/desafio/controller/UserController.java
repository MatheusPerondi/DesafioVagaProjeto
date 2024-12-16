package com.desafio.controller;

import com.desafio.Dto.UserDto;
import com.desafio.model.User;
import com.desafio.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> buscarTodos(){
        return ResponseEntity.status(HttpStatus.OK).body(userService.buscarTodos());
    }

    @GetMapping("/{nome}")
    public ResponseEntity<List<User>> buscarPorNome(@PathVariable("nome") String nome){
        return ResponseEntity.status(HttpStatus.OK).body(userService.buscarPorNome(nome));
    }

    @PostMapping
    public ResponseEntity<User> salvar(@Valid @RequestBody UserDto dto){
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.salvar(dto));
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> buscarPorId(@PathVariable("id") BigInteger id){
        return ResponseEntity.status(HttpStatus.OK).body(userService.buscarPorId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> editar(@PathVariable("id") BigInteger id, @RequestBody UserDto dto){
        return ResponseEntity.status(HttpStatus.OK).body(userService.edit( id, dto));
    }
}
