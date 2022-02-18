import styled from "styled-components";

export const Wrapper = styled.header`
    height: 80px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    border-radius: 15px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 150px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

export const Container = styled.div`
    position: sticky;
    top: -15px;
    padding: 15px;
    z-index: 10;
`

export const Logo = styled.img`
    width: 60px;
    height: 60px;
    @media screen and (max-width: 400px) {
        width: 45px;
        height: 45px;
    }
`

export const AuthBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Button = styled.button`
    font-size: 25px;
    font-weight: 600;
    border: none;
    color: #999;
    background-color: transparent;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s ease;
    svg{
        display: flex;
        font-size: 35px;
        transition: all .3s ease;
    }
    :hover svg{
        color: #005582;
    }
    a{
        font-family: 'Economica', sans-serif;
        text-decoration: none;
        color: #999;
        :hover {
        color: #005582;
    }
    }
    
    @media screen and (max-width: 550px) {
        display: none;
    }
`

export const LoggedBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    a{  
        text-decoration: none;
        margin-right: 10px;
    }
    @media screen and (max-width: 550px) {
        min-width: 100px;
    }
    @media screen and (max-width: 400px) {
        min-width: 85px;
    }
`

export const UserName = styled.p`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 550px) {
        display:none;
    }
`;

