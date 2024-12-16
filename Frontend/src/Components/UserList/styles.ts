import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #e1dedd;
    padding: 25px;
`;

export const CardContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 5px;
    padding: 25px;
    display: flex;
    display: flex;
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: 1px solid lightgray;
    align-items: center;
    
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
`;


export const Title = styled.h4`
    width: 100%;
`;

export const ContetContainer = styled.div`
    padding-top: 25px;
    display: flex;
    flex-direction: column;
`;

export const Button = styled.button`
    height: 45px;
    width: 140px;
    border: none;
    border-radius: 10px;
    background-color: 	#4682B4;
    color: #fff;
    padding: 5px;

`;

export const Input = styled.input`
    border: 1px solid lightgrey;
    width: 250px;
    height: 30px;
    border-radius: 10px;
    margin-right: 10px;
    padding: 10px;

    &:focus {
        outline: none; /* Remove o contorno ao focar */
        border: 1px solid lightgrey; /* Garante que a borda não fique mais espessa ou em negrito */
    }

`;

export const InputButton = styled.button`
    border: none;
    background-color: transparent;

    transition: all 0.5s ease;

    &:hover{
        transform: scale(1.1)
    }
`;

export const InputContainer = styled.div`
    display: flex;
    margin-right: 80px;
`;

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    border-radius: 5px;
    margin-top: 25px;
`;

export const THead = styled.thead`
      background-color: #f4f4f4;
`;

export const Tr = styled.tr`
    &:nth-child(even) {
        background-color: #f9f9f9;
    }
`;

export const Th = styled.th`
    padding: 12px;
    font-weight: bold;
    color: #333;
    text-align: left;
    border-bottom: 1px solid #ddd;

    &:last-child {
        text-align: center;
        display: flex;
        justify-content: center; /* Alinha os botões ao centro */
        gap: 10px; /* Espaçamento entre os botões */
    }
`;

export const TBody = styled.tbody`

`;

export const TrTbody = styled.tr`

`;

export const TdTbody = styled.td`
    padding: 12px;
    color: #555;
    text-align: left;
    border-bottom: 1px solid #ddd;

    &:last-child {
        text-align: center;
        display: flex;
        justify-content: center; /* Alinha os botões ao centro */
        gap: 10px; /* Espaçamento entre os botões */
    }
`;

export const EditButton = styled.button`
    border: 1px solid lightgray;
    background-color: #fff;
    padding: 2px;
`;