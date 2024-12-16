# Sistema de Cadastro de Usuários

Este projeto é um sistema de cadastro de usuários que permite criar, visualizar e gerenciar informações de usuários. 

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **[React](https://reactjs.org/):** Biblioteca JavaScript para a construção de interfaces de usuário.
- **[Styled Components](https://styled-components.com/):** Biblioteca para estilização de componentes utilizando CSS-in-JS.
- **[Axios](https://axios-http.com/):** Cliente HTTP para realizar requisições ao backend.


### Backend  
- **Spring Boot**: Framework Java para desenvolvimento do backend.  
- **Dependências Principais**:   
  - **Spring Boot Starter Web**: Configurações básicas para APIs RESTful.  
  - **Spring Boot Starter Data JPA**: Abstração para acesso ao banco de dados com suporte ao padrão JPA.  
  - **Flyway**: Controle e versionamento de migrations para o banco de dados.  
  - **MySQL Connector**: Driver JDBC para conectar ao banco de dados MySQL.  
  - **Lombok**: Reduz a verbosidade no código Java ao gerar automaticamente getters, setters e outros métodos comuns.  
  - **Spring Boot Starter Validation**: Suporte a validação de entradas com anotações como `@NotNull`, `@Size`, etc.    

---

## ⚙️ Funcionalidades Implementadas

- **Cadastro de Usuários:** Criação de novos usuários com informações como nome, email, telefone, username, senha, e status ativo/inativo.
- **Validação de Formulários:** Validações como email válido, tamanho mínimo de senha e verificação de campos obrigatórios.
- **Upload de Imagens:** Possibilidade de adicionar uma imagem de perfil para o usuário.
- **Botão de Status:** Alterna entre "Ativo" e "Inativo".
- **Consumo de API:** O frontend realiza requisições ao backend para persistir os dados no banco de dados.

---

