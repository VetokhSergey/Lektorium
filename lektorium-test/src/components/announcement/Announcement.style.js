import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
    border-radius: 20px;
    list-style: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const Title = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
    word-break: break-word;
`;

export const Body = styled.p`
    font-size: 15px;
    margin-bottom: 10px;
    word-break: break-word;
`;

export const Author = styled.p`
    text-align: right;
    margin-bottom: 20px;
    font-size: 14px;
`;

export const Time = styled.span`
    margin-left: 10px;
    font-size: 14px;
`;

export const Input = styled.input`
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    font-size: 25px;
    padding: 15px;
    width: 100%;
`;

export const TextArea = styled.textarea`
    border: none;
    border-radius: 5px;
    font-size: 20px;
    padding: 20px;
    width: 100%;
    min-height: 200px;
    outline: none;
    margin: 20px 0;
    resize: none;
    :focus{
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border: none;
    padding: 5px;
    margin-bottom: 10px;
    border-radius: 10px;
    cursor: pointer;
    background-color: transparent;
    svg{
        border-radius: 50%;
        :hover{
            color: #0086ad;
        }
    }
`;

export const ManageBlock = styled.div`
    height: 40px;
    display: flex;
    justify-content: end;
`;

