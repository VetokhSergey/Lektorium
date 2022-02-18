import styled from "styled-components";
import url from "../../assets/images/login.webp"

export const Wrapper = styled.div`
    background: url(${url});
    height: calc(100vh - 110px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    
    a{
        position: absolute;
        top: 150px;
        right: 5%;
        text-align: center;
        cursor: pointer;
        background-color: #b3a1a4;
        border: none;
        min-width: 100px;
        line-height: 1;
        padding: 15px;
        border-radius: 10px;
        transition: all .3s ease;
        text-decoration: none;
        color: #000;
        
        :hover {
        background-color: teal;
        color: #fff
        }
        @media screen and (max-width: 550px) {
        position: static;
        width: 160px;
        margin-top: 10px;
        }
    }
`;

export const Title = styled.span`
    font-size: 50px;
`;

export const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    span{
        text-align: center;
        color: red;
        font-size: 18px;
    }
`;

export const Input = styled.input`
    min-width: 120px;
    padding: 10px;
    background-color: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const LoginBtn = styled.button`
    cursor: pointer;
    background-color: #5f7a7a;
    border: none;
    min-width: 70px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;
    transition: all .3s ease;
    :hover{
        color: #fff;
        background-color: #005582;
    }
`;

