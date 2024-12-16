package com.desafio.model;

import com.desafio.Enum.NiveisPermissao;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "usuarios")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private BigInteger id;

    private String nome;

    @Column(unique = true)
    private String username;

    @Column(unique = true)
    private String email;

    private String telefone;

    private String senha;

    private Boolean ativo;


    @Enumerated(EnumType.STRING)
    @Column(name = "nivel_permissao")
    private NiveisPermissao nivelPermissao;
}
