import React, { useState, useRef } from "react";
import axios from 'axios';
import People from '../../assets/OLA 1.svg';
import Arrow from '../../assets/seta.svg';
import H1 from '../../components/Title'
import ContainerItens from "../../components/ContainerItens";

import { Container, Img, Label, Input, Button } from "./style";

function App() {
    const [users, setUsers] = useState([]);
    const inputName = useRef();
    const inputAge = useRef();

    async function addNewUser() {
        const { data: newUser } = await axios.post('http://localhost:3001/users', {
            name: inputName.current.value,
            age: inputAge.current.value
        });
        setUsers([...users, newUser]);
    }

    return (
        <Container>
            <Img src={People} alt="logo-imagem" />
            <ContainerItens>
                <H1>Olá!</H1>
                <Label>Nome</Label>
                <Input ref={inputName} placeholder="Nome"></Input>
                <Label>Idade</Label>
                <Input ref={inputAge} placeholder="Idade"></Input>
                <Button to='/usuarios' onClick={addNewUser}>Cadastrar <img src={Arrow} alt="seta" /></Button> 
            </ContainerItens>
        </Container>
    );
}

export default App;