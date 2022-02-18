import styled from "styled-components";
import url from "../../assets/images/settings.webp"

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 8fr 1fr;
    
    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        height: calc(100vh - 110px);
    }
`;

export const Setting = styled.div`
    background: url(${url});
    border-radius: 0 15px 15px 0;
    @media screen and (max-width: 768px) {
        border-radius: 0;
        height: calc(100vh - 110px);
    }
    padding: 20px;
`

export const Title = styled.div`
    font-family: 'Dosis', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
    color: #333;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
        font-family: 'Josefin Slab', serif;
        font-style: italic;
        font-weight: 600;
        font-size: 20px;
        margin-top: 20px;
        color: #333;
    }
    span {
        font-family: 'Parisienne', cursive;
        font-size: 25px;
        margin-top: 10px;
        line-height: 1.4;
        text-decoration: underline;
        text-decoration-color: #ff0000;
    }
    svg{
        font-size: 45px;
        color: #fff;
    }
`;

export const PictureInput = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
`

export const Avatar = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;
`
export const Icon = styled.img`
    width: 25px;
    height: 25px;
    margin-left: 15px;
    cursor: pointer;
`

export const Input = styled.input`
    color: #555;
    margin: 5px 0;
    padding: 10px;
    height: 35px;
    outline: none;
    background: transparent;
    border: none;
    border-bottom: 1px solid #333;
`
