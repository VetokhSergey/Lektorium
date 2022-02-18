import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`;

export const Post = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 15px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    @media screen and (max-width: 550px) {
        padding: 0;
        box-shadow: none;
    }
`;

export const CommentsBlock = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ManageBlock = styled.div`
    padding: 5px;
    display: flex;
    justify-content: end;
    text-align: right;
`;

export const Title = styled.h1`
font-family: 'Cinzel', serif;
    text-align: center;
    font-size: 40px;
    margin-bottom: 10px;
    @media screen and (max-width: 999px){
        font-size: 35px;
    }
    @media screen and (max-width: 768px){
        font-size: 30px;
    }
`;

export const Body = styled.p`
    padding: 0 5px;
    font-size: 28px;
    line-height: 1.6;
    margin-bottom: 15px;
    @media screen and (max-width: 999px){
        font-size: 22px;
    }
`;

export const Author = styled.p`
    font-size: 20px;
    padding: 5px 10px;
    text-align: right;
    @media screen and (max-width: 999px){
        font-size: 16px;
    }
`;

export const Time = styled.span`
    margin-left: 10px;
`;

export const Image = styled.img`
    width: 100%;
    min-height: 300px;
    align-self: center;
    max-height: 600px;
    border-radius: 10px;
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    font-size: 30px;
    padding: 15px;
    width: 100%;
    margin-top:20px;
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
    margin:20px 0;
    :focus{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    svg{
        font-size: 30px;
        margin-left: 10px;
        color: #222;
        transition: all .3s ease;
        :hover{
            color: #0086ad;
        }
    }
`;

export const CommentWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    width: 100%;
    height: 120px;
    input{
        font-size: 20px;
        outline: none;
        border: none;
        border-bottom: 1px solid #ddd;
        width: 100%;
    }
    button{
        margin-left: 10px;
        align-self: flex-end;
        svg{
            font-size: 40px;
        }
    }
    @media screen and (max-width: 500px){
        height: 80px;
    }
`