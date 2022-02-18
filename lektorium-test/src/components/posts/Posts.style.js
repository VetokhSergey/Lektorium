import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    max-width: 100%;
    display: grid;
    grid-template-columns: 8fr 1fr;
    grid-column-gap: 20px;
    margin: 15px 0;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    min-height: 400px;
    @media screen and (max-width: 845px) {
        grid-template-columns: 1fr;
    }
`

export const Item = styled.li`
    padding: 0 15px;
    margin-bottom: 35px;
`

export const Control = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


