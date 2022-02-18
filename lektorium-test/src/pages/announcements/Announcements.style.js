import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    padding: 20px; 
`;

export const Heading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h3{
        color: #BBACDA;
    }
    @media screen and (max-width: 550px){
        flex-direction: column;
        h2{
            margin-bottom: 10px;
        }
    }
`

export const Wrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: min-content;
    grid-gap: 20px;
    @media screen and (max-width: 1366px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 999px){
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 600px){
        grid-template-columns: 1fr;
    }
`;

export const Edit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    border-radius: 20px;
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

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
    min-height: 250px;
    outline: none;
    margin: 20px 0;
    resize: none;
    :focus{
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }
`;

export const LoaderWrap = styled.div`
    display: flex;
    justify-content: center;
`;
