import styled from "styled-components";

type Props = {
    isOn: boolean;
}

export const UserContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    background-color: #e1dedd;
    padding: 25px;
`;

export const UserCardContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 25px;
    display: flex;
    flex-direction: column;
`;

export const UserHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: 1px solid lightgray;
    align-items: center;
    
`;

export const UserTitleContainer = styled.div`
    width: 100%;
    display: flex;
`;


export const UserTitle = styled.h4`
    width: 100%;
`;

export const UserContetContainer = styled.div`
    padding-top: 25px;
    display: flex;
    flex-direction: row;
`;

export const AvatarContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const AvatarImg = styled.img`
    width: 240px;
    height: 240px;
    border-radius: 50%;
    object-fit: cover;
`;  


export const AdicionarImagem = styled.label`
    font-size: 16px;
    color: black;
    cursor: pointer;
    margin-bottom: 15px;
`;

export const HiddenInput = styled.input`
    display: none;
`;



export const FormContainer = styled.div`
    width: 100%;
`;

export const ButtonOnOff = styled.button<Props>`
    display: flex;
    border: 1px solid transparent;
    background-color: ${(props) => (props.isOn ? "#34C759" : "#E5E5EA")}; 
    width: 60px;
    height: 25px;
    justify-content: center;
    align-items: center;
    font-size: 15px;
`;

export const FormData = styled.form`

`;


export const InputForm = styled.input`
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  background-color: #F0F8FF;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const NameInputContainer = styled.div`
    width: 100%;
`;

export const PhoneEmailInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: space-between;
    gap: 15px;
`;

export const UserNameInputContainer = styled.div`
    width: 60%;
`;

export const PasswordInputContainer = styled.div`
    width: 50%;
`;

export const NivelPermissaoInputContainer = styled.div`
    width: 50%;
`;

export const FooterCard = styled.div`
    border-top: 1px solid lightgray;
    width: 100%;
    margin-top: 25px;
    display: flex;
    justify-content: flex-end;
    gap: 15px;
`;

export const BackButton = styled.button`
    border: 1px solid lightgray;
    background-color: transparent;
    width: 60px;
    height: 35px;
    margin-top: 20px;
`;

export const SaveButton = styled.button`
    background-color: lightblue;
    width: 60px;
    height: 35px;
    border: none;
    margin-top: 20px;
`;