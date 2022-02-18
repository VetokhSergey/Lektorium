import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 8fr 1fr;
    grid-gap: 20px;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 5px;
    }
`;

export const Form = styled.form`
    padding: 10px;
    width: 95%;
    margin: 0 auto;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 400px;
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    font-size: 30px;
    padding: 15px;
    width: 100%;
    :focus{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`;

export const TextArea = styled.textarea`
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 20px;
    padding: 20px;
    width: 100%;
    min-height: 250px;
    outline:none;
    :focus{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    svg{
        padding: 5px;
        background-color: #ccc;
        color: #000;
        border-radius: 50%;
        transition: all .3s ease;
        :hover{
            color: ${props => props.disabled ? "#000" : "#fff"};
            background-color: ${props => props.disabled ? "#ccc" : "#005582"};
        }
    }
`;