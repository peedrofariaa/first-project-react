import styles from 'styled-components'
import { Link } from 'react-router-dom';
import Background from '../../assets/fundo 2.svg'

export const Container = styles.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    height: 100%;
    min-height: 100vh; 
`;

export const Img = styles.img`
    margin-top: 30px;
`;

export const Button = styles(Link)`
    background: transparent;
    border-radius: 14px;
    width: 342px;
    height: 74px;
    border: 1px solid white;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    color: white; 
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-top: 130px;
    &:hover{
        opacity:0.8;
    }
    &:active{
        opacity:0.6;
    }

    img{
        transform: rotateY(180deg);
    }
`;

export const User = styles.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    width: 342px;
    height: 58px;
    color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    outline: none;
    border:none;

    button{
        background: none;
        border: none;
        cursor: pointer;
    }

    button:hover{
        opacity: 0.8;
    }

    button:active{
        opacity: 0.6;
    }
`