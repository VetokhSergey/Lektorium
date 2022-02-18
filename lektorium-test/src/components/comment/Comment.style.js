import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px 15px;
    border-radius: 15px;
    margin: 20px 0;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const Text = styled.p`
    font-size: 20px;
    word-break: break-all;
`;

export const Author = styled.span`
    font-size: 17px;
    min-width: 150px;
`

export const Control = styled.div`
    position: absolute;
    bottom: -35px;
    right: 10px;
    min-width: 80px;
    display: flex;
    justify-content: space-between;
    button{
        padding: 5px;
        
        svg{
            border:1px solid #ccc;
            border-radius: 5px;
        }
    }
`;

export const Input = styled.textarea`
    border: none;
    outline: none;
    resize: none;
    overflow: auto;
    min-height: 30px;
    padding: 10px;
    font-size: 20px;
`