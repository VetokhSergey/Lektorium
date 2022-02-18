import styled from "styled-components";

export const Wrapper = styled.div`
    position: sticky;
    top: 110px;
    height: calc(100vh - 110px);
    overflow: auto;
    min-width: 320px;
    max-width: 320px;
    padding: 0;
    border-radius: 20px 0 0 20px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    h2{
        width: 100%;
        padding: 10px;
        position: sticky;
        text-align: center;
        top: 0;
        background-color: #fff;
    }
    @media screen and (max-width: 1000px) {
        min-width: 250px;
        max-width: 250px;
    }
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Title = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
    @media screen and (max-width: 860px) {
        font-size: 15px;
    }
`;

export const Body = styled.p`
    font-size: 15px;
    margin-bottom: 10px;
    @media screen and (max-width: 860px) {
        font-size: 13px;
    }
`;

export const List = styled.li`
    padding: 10px 15px;
    list-style: none;
`
export const Author = styled.p`
    text-align: right;
    margin-bottom: 10px;
    font-size: 14px;
    @media screen and (max-width: 860px) {
        font-size: 13px;
    }
`;

export const Time = styled.span`
    margin-left: 10px;
    font-size: 14px;
    @media screen and (max-width: 860px) {
        font-size: 13px;
    }
`;
