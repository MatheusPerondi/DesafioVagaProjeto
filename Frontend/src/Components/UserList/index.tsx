import { useEffect, useState } from "react";
import { Button, CardContainer, Container, ContetContainer, EditButton, Header, Input, InputButton, InputContainer, Table, TBody, TdTbody, Th, THead, Title, TitleContainer, Tr, TrTbody } from "./styles";
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface User {
    id: number;
    nome: string;
    username: string;
    telefone:  string;
    email: string;
    ativo: boolean;
    nivelPermissao: string;
}

interface UserListProps {
    user?: User[];
}

export function UserList({ user }: UserListProps) {
    const [users, setUsers] = useState<User[]>(user || []);
    const [input, setInput] = useState("");
    const navigate = useNavigate();


    function handleAddUserButtton() {
        navigate("new-user")
    }

    function handleEditButton(userToEdit: User) {
        navigate('/edit-user', { state: { user: userToEdit } });
    }


    const filteredUsers = input 
    ? users.filter(user => 
        user.nome && user.nome.toLowerCase().includes(input.toLowerCase())
    )
    : users;


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get<User[]>("http://localhost:8082/cadastro/users", {
                    withCredentials: true,
                });

                if (!response.data || response.data.length === 0) {
                    throw new Error("Nenhum usuário encontrado.");
                }

                setUsers(response.data);

            } catch (err: any) {
                alert("Erro ao carregar usuario")
            }
        };

        fetchUsers();
    }, []);

    

    console.log(filteredUsers)

    console.log("usuariossss", users);

    return (
        <Container>
            <CardContainer>

                <Header>
                    <TitleContainer>
                        <Title>Lista de usuarios</Title>
                    </TitleContainer>

                    <InputContainer>
                        <Input
                            onChange={handleSearchChange}
                        />
                    </InputContainer>
                </Header>

                <ContetContainer>
                    <Button onClick={handleAddUserButtton}>Adicionar usuario</Button>
                </ContetContainer>

                <Table>
                    <THead>
                        <Tr>
                            <Th scope="col">Nome</Th>
                            <Th scope="col">Username</Th>
                            <Th scope="col">Email</Th>
                            <Th scope="col">Ativo</Th>
                            <Th scope="col">Acoes</Th>
                        </Tr>
                    </THead>

                    <TBody>
                        {filteredUsers.map((UserItem) => (
                            <TrTbody key={UserItem.id}>
                                <TdTbody> {UserItem.nome} </TdTbody>
                                <TdTbody> {UserItem.username} </TdTbody>
                                <TdTbody> {UserItem.email} </TdTbody>
                                <TdTbody> {UserItem.ativo ? 'Ativo' : 'Inativo'} </TdTbody>
                                <TdTbody>
                                    <EditButton onClick={() => handleEditButton(UserItem)}> <EditIcon /> </EditButton>
                                </TdTbody>
                            </TrTbody>
                        ))}
                    </TBody>
                </Table>

            </CardContainer>
        </Container>
    )
}