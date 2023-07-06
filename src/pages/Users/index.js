import React, { useState, useEffect } from "react";
import axios from 'axios'
import Chat from '../../assets/User Profile_Monochromatic 2.svg'
import Arrow from '../../assets/seta.svg'
import Trash from '../../assets/lixeira.svg'
import H1 from "../../components/Title";
import ContainerItens from "../../components/ContainerItens";

import { Container, Img, Button, User } from "./style";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            const { data: newUser } = await axios.get('http://localhost:3001/users');
            setUsers(newUser);
        }
        fetchUsers()
    }, [])

    async function deleteUser(userId) {
        await axios.delete(`http://localhost:3001/users/${userId}`)
        const newUser = users.filter(user => user.id !== userId)

        setUsers(newUser);
    }

    return (
        <Container>
            <Img src={Chat} alt="logo-imagem" />
            <ContainerItens isBlur={true}>
                <H1>Usuários</H1>
                <ul>
                    {users.map((user) => (
                        <User key={user.id}>
                            <p>{user.name}</p> <p>{user.age}</p>
                            <button onClick={() => deleteUser(user.id)}> <img src={Trash} alt="lata-de-lixo" /> </button>
                        </User>
                    ))}
                </ul>
                <Button to='/'><img src={Arrow} alt="seta" />Voltar</Button>
            </ContainerItens>
        </Container>
    );
}

export default Users;