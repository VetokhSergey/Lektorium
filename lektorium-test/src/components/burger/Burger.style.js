import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    background-color: oldlace;
    display: flex;
    justify-content: center;
    width: 55%;
    border: 1px solid #ddd;
    transition: opacity .4s ease;
    padding: 15px;
    z-index: 1;
    border-radius: 5px;
    @media screen and (max-width: 370px) {
        width: 100%;
        height: 100vh;
    }
    
    @media screen and (min-width: 551px) {
        display: none;
    }
`;

export const List = styled.ul`
    list-style: none;
`;

export const Button = styled.button`
    border: none;
    font-size: 30px;
    font-weight: 600;
    color: #777;
    cursor: pointer;
    background: none;
    :hover{
        color: #005582;
    }
    a{
        color: #777;
    }
    a:hover{
        color: #005582; 
    }
`

export const Item = styled.li`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 20px;
    a{
        font-family: 'Economica', sans-serif;
        text-decoration: none;
        color: #777;
    }
    a:hover{
        color: #005582;
    }
    @media screen and (max-width: 400px) {
        font-size: 22px;
    }
`;

export const Icon = styled.div`
    border: none;
    transition: all .3s ease;
    cursor: pointer;
    svg{
        border-radius: 5px;
        font-size: 35px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    @media screen and (min-width: 551px) {
        display: none;
    }
`