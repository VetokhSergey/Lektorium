import styled from "styled-components";
import url from "../../assets/images/register.webp"

export const Wrapper = styled.div`
    background: url(${url});
    display: flex;
    height: calc(100vh - 110px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-size: cover;
    padding: 10px;
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
        @media screen and (max-width: 600px) {
        position: static;
        margin: 20px 0;
        width: 120px;
        } 
}
@media screen and (max-width: 600px){
        height: calc(100vh + 110px);
    }
`;

export const Title = styled.span`
    font-size: 50px;
`;

export const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 600px) {
        min-width: 300px;
    }
`;

export const Block = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 550px;
    margin-bottom: 20px;
    @media screen and (max-width: 600px){
        flex-direction: column;
        min-width: 250px;
    }
`;

export const Input = styled.input`
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #ddd;
    outline: none;
    @media screen and (max-width: 600px){
        width: 100%;
    }
`;

export const RegisterBtn = styled.button`
    margin: 0 auto;
    cursor: pointer;
    background-color: #5f7a7a;
    border: none;
    width: 120px;
    padding: 10px;
    border-radius: 10px;
    transition: all .3s ease;
    :hover{
        color: #fff;
        background-color: #005582;
    }
`;

export const Select = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
`

export const Man = styled.label`
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: url("https://cdn.icon-icons.com/icons2/39/PNG/128/user_person_people_6100.png"), center;
    background-size: contain;
    margin-right: 20px;
    cursor: pointer;
`
export const Woman = styled.label`
    display: block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: url("https://cdn.icon-icons.com/icons2/39/PNG/128/userkdmfemale_person_woman_5920.png"), center;
    background-size: contain;
    cursor: pointer;
`


