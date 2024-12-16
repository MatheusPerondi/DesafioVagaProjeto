package com.desafio.Dto;

import com.desafio.Enum.NiveisPermissao;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {

    private BigInteger id;

    @NotBlank(message = "valor não pode ser nulo ou vazio")
    private String nome;

    @NotBlank(message = "valor não pode ser nulo ou vazio")
    private String username;

    @NotBlank(message = "valor não pode ser nulo ou vazio")
    @Size(min = 10, max = 11)
    private String telefone;

    @Email(message = "Email invalido")
    private String email;

    @NotBlank(message = "valor não pode ser nulo ou vazio")
    @Size(min = 6, message = "valor minimo igual a 6 caracteres")
    private String senha;

    @NotNull(message = "O campo 'ativo' não pode ser nulo")
    private Boolean ativo;

    @NotNull(message = "O campo 'nivelPermissao' não pode ser nulo")
    private NiveisPermissao nivelPermissao;
}
