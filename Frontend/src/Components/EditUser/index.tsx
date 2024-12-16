import {  Container } from "@mui/material";
import {  AdicionarImagem, AvatarContainer, AvatarImg, BackButton, ButtonOnOff, FooterCard, FormContainer, FormData, HiddenInput, InputForm, NameInputContainer, NivelPermissaoInputContainer, PasswordInputContainer, PhoneEmailInputContainer, SaveButton, UserCardContainer, UserContainer, UserContetContainer, UserHeader, UserNameInputContainer, UserTitle, UserTitleContainer } from "./styles";
import Avatar from "../../assets/istockphoto-1337144146-612x612.jpg"
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export interface User {
    id: number;
    nome: string;
    telefone: string;
    username: string;
    email: string;
    ativo: boolean;
    nivelPermissao: string;
    senha: string;
    
}

interface EditUserProps {
    updateUser: (updatedUser: User) => void;
    users: User[]; 
}

export function EditUser({updateUser}: EditUserProps) {
    const navigate = useNavigate();
    const location = useLocation();
    
    const [image, setImage] = useState<string | null>(Avatar);

    const userToEdit = location.state?.user;
    const [isActive, setIsActive] = useState<boolean>(false);
    const [formData, setFormData] = useState<User>({
        id: userToEdit?.id,
        nome: userToEdit?.nome || "",
        telefone: userToEdit?.telefone || "",
        email: userToEdit?.email || "",
        username: userToEdit?.username || "",
        senha: userToEdit?.senha || "",
        nivelPermissao: userToEdit?.nivelPermissao || "",
        ativo: userToEdit.ativo,
    });


    function handleBackButton(){
        navigate("/");
    }    

    const handleImageUpliad = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        const { nome, username,  email, telefone, senha, nivelPermissao } = formData;
        if (!nome || !email || !senha || !nivelPermissao || !username) {
            alert("Por favor, preencha todos os campos obrigatórios marcados com *.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();


        if (!validateForm()) {
            return;
        }
        
        try {
            const response = await axios.put(
                `http://localhost:8082/cadastro/users/${userToEdit.id}`,
                formData,
                { headers: { "Content-Type": "application/json" } }
            );
    
            updateUser(response.data); 
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
        setIsActive((prevState: any) => !prevState);
        setFormData({
            ...formData,
            ativo: !isActive,
        })
    }

    useEffect(() => {
        if (userToEdit) {
          setFormData({
            id: userToEdit.id,
            nome: userToEdit.nome,
            telefone: userToEdit.telefone,
            email: userToEdit.email,
            username: userToEdit.username,
            senha: userToEdit.senha,
            nivelPermissao: userToEdit.nivelPermissao,
            ativo: userToEdit.ativo,
          });
        }

        setIsActive(formData.ativo);
      }, [userToEdit]);

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
                        <AdicionarImagem htmlFor="upload-image">Edite a imagem de perfil</AdicionarImagem>
                        <HiddenInput
                            type="file"
                            id="upload-image"
                            accept="image/*"
                            onChange={handleImageUpliad}
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
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    placeholder="Nome *"
                                />

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

                                <InputForm
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email *"
                                />
                            </PhoneEmailInputContainer>
                            
                            <UserNameInputContainer>
                                <InputForm
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    placeholder="Username *"
                                />
                            </UserNameInputContainer>
                            
                            <PasswordInputContainer>
                                <InputForm
                                    type="text"
                                    id="senha"
                                    name="senha"
                                    value={formData.senha}
                                    onChange={handleChange}
                                    placeholder="Senha *"
                                    
                                />
                            </PasswordInputContainer>
                            
                            <NivelPermissaoInputContainer>
                                <InputForm
                                    type="text"
                                    id="nivelPermissao"
                                    name="nivelPermissao"
                                    value={formData.nivelPermissao}
                                    onChange={handleChange}
                                    placeholder="Nivel de permissão*"
                                />
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
