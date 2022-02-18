import styled from "styled-components";

export const Wrapper = styled.div`
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    padding: 15px;
    border-radius: 15px;
    a{
        text-decoration: none;
        color: #000
    }
    @media screen and (min-width: 450px) {
        min-height: 200px;
    }
    @media screen and (min-width: 550px) {
        min-height: 250px;
    }
    @media screen and (min-width: 650px) {
        min-height: 300px;
    }
    @media screen and (min-width: 768px) {
        min-height: 500px;
    }
    @media screen and (min-width: 769px) {
        min-height: 250px;
    }
`;

export const Title = styled.h1`
    font-family: 'Cinzel', serif;
    font-size: 25px;
    margin-bottom: 20px;
    text-align: center;
`;

export const Body = styled.p`
    font-size: 20px;
    color: #444;
    line-height: 24px;
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`

export const Author = styled.p`
    text-align: center;
    margin: 10px 15px 0 0;
    font-size: 20px;
    color: #444;
`;

export const Time = styled.span`
    margin-left: 10px;
`;

export const Image = styled.img`
    max-width: 100%;
    border-radius: 5px;
    @media screen and (max-width: 768px) {
        max-height: 90%;
    }
`;