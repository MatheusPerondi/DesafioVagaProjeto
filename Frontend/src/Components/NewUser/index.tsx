import { Container } from "@mui/material";
import { AdicionarImagem, AvatarContainer, AvatarImg, BackButton, ButtonOnOff, FooterCard, FormContainer, FormData, HiddenInput, InputForm, NameInputContainer, NivelPermissaoInputContainer, PasswordInputContainer, PhoneEmailInputContainer, SaveButton, UserCardContainer, UserContainer, UserContetContainer, UserHeader, UserNameInputContainer, UserTitle, UserTitleContainer } from "./styles";
import Avatar from "../../assets/istockphoto-1337144146-612x612.jpg";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Block } from "@mui/icons-material";
import axios from "axios";

export interface User {
    name: string;
    telefone: string;
    userName: string;
    email: string;
    ativo: boolean;
    nivelPermissao: string;
    senha: string;
}

interface NewUserProps {
    addUser: (newUser: User) => void;
}

export function NewUser({ addUser }: NewUserProps) {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState<boolean>(false);
    const [image, setImage] = useState<string | null>(Avatar);
    const [formData, setFormData] = useState<User>({
        name: "",
        telefone: "",
        email: "",
        userName: "",
        senha: "",
        nivelPermissao: "",
        ativo: isActive,
    });
    const [errors, setErrors] = useState<any>({});


    function handleBackButton() {
        navigate("/");
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            }
            reader.readAsDataURL(file);
        }
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const { name, userName, email, senha, nivelPermissao, telefone } = formData;

        if (!name || !userName || !email || !senha || !nivelPermissao) {
            alert("Por favor, preencha todos os campos obrigatórios marcados com *.");
            return false;
        }

        const newErrors: any = {};

        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email && !emailRegex.test(email)) {
            newErrors.email = "Email inválido!";
        }

        if (telefone && !/^\d{10,11}$/.test(telefone)) {
            newErrors.telefone = "Telefone inválido! Deve ter 10 ou 11 dígitos.";
        }

        if (senha && senha.length < 6) {
            newErrors.senha = "A senha deve ter pelo menos 6 caracteres!";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!validateForm()) {
            return;
        }

        const userDto = {
            nome: formData.name,
            username: formData.userName,
            telefone: formData.telefone,
            email: formData.email,
            senha: formData.senha,
            ativo: formData.ativo,
            nivelPermissao: formData.nivelPermissao,
        };



        try {
            const response = await axios.post("http://localhost:8082/cadastro/users", userDto, {
                withCredentials: true,
            });
            addUser(formData);
            navigate("/");
        } catch (error: any) {
            if (error.response) {
                
                const errorMessage = error.response.data.message || "Erro ao editar o usuário. Tente novamente.";
                alert(errorMessage);
            } else {
                
                alert("Erro ao editar o usuário. Tente novamente.");
            }
        }
    }

    function handleButton(event: any) {
        event.preventDefault();
        setIsActive((prevState) => !prevState);
        setFormData({
            ...formData,
            ativo: !isActive,
        })
    }

    useEffect(() => {
        setIsActive(formData.ativo);
    }, []);

    return (
        <UserContainer>
            <UserCardContainer>
                <UserHeader>
                    <UserTitleContainer>
                        <UserTitle>Novo Usuário</UserTitle>
                    </UserTitleContainer>
                </UserHeader>

                <UserContetContainer>
                    <AvatarContainer>
                        <AdicionarImagem htmlFor="upload-image">Adicionar imagem de perfil</AdicionarImagem>
                        <HiddenInput
                            type="file"
                            id="upload-image"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        <AvatarImg src={image || Avatar} />
                    </AvatarContainer>

                    <FormContainer>

                        <FormData>

                            <ButtonOnOff isOn={isActive} onClick={handleButton}>
                                {isActive ? "Ativo" : "Inativo"}
                            </ButtonOnOff>

                            <NameInputContainer>
                                <InputForm
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Nome *"
                                />
                                {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
                            </NameInputContainer>

                            <PhoneEmailInputContainer>
                                <InputForm
                                    type="text"
                                    id="telefone"
                                    name="telefone"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    placeholder="Telefone"
                                />
                                {errors.phone && <div style={{ color: "red", display: "block", marginTop: "5px", fontSize: "12px" }}>{errors.phone}</div>}

                                <InputForm
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email *"
                                />
                                {errors.email && <div style={{ color: "red", display: "block", marginTop: "15px", fontSize: "12px" }}>{errors.email}</div>}
                            </PhoneEmailInputContainer>

                            <UserNameInputContainer>
                                <InputForm
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    placeholder="Username *"
                                />
                            </UserNameInputContainer>

                            <PasswordInputContainer>
                                <InputForm
                                    type="password"
                                    id="senha"
                                    name="senha"
                                    value={formData.senha}
                                    onChange={handleChange}
                                    placeholder="Senha *"
                                />
                                {errors.senha && <div style={{ color: "red", display: "block", marginTop: "5px", fontSize: "12px" }}>{errors.senha}</div>}
                            </PasswordInputContainer>

                            <NivelPermissaoInputContainer>
                                <InputForm
                                    type="text"
                                    id="nivelPermissao"
                                    name="nivelPermissao"
                                    value={formData.nivelPermissao}
                                    onChange={handleChange}
                                    placeholder="Nivel de permissão* ADMIN ou USUARIO"
                                />
                                {errors.nivelPermissao && <div style={{ color: "red", display: "block", marginTop: "5px", fontSize: "12px" }}>{errors.nivelPermissao}</div>}
                            </NivelPermissaoInputContainer>
                        </FormData>
                    </FormContainer>
                </UserContetContainer>

                <FooterCard>
                    <BackButton onClick={handleBackButton}>
                        Voltar
                    </BackButton>
                    <SaveButton onClick={handleSubmit}>
                        Salvar
                    </SaveButton>
                </FooterCard>
            </UserCardContainer>
        </UserContainer>
    );
}
