import styled from "styled-components";

export const Button = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 40px;
    right: 40px;
    width: 45px;
    height: 45px;
    font-size: 35px;
    border-radius: 10px;
    color: #fff;
    border: 1px solid #eee;
    background-color: #0086ad;
    opacity: 0.5;
    transition: all .3s ease;
    cursor: pointer;
    :hover{
        color: #333;
        opacity: 1;
    }
`