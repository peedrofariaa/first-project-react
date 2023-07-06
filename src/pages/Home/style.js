import styles from 'styled-components'
import { Link } from 'react-router-dom';
import Background from '../../assets/fundo image.svg'

export const Container = styles.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    height: 100vh;
`;

export const Img = styles.img`
    margin-top: 30px;
`;

export const Label = styles.label`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;  
    letter-spacing: -0.408px;
    color: #EEEEEE;
    margin-left: 25px;
`;

export const Input = styles.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 30px;
`;

export const Button = styles(Link)`
    margin-top: 130px;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    width: 342px;
    height: 74px;
    border: none;
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
    &:hover{
        opacity:0.8;
    }
    &:active{
        opacity:0.6;
    }
`;