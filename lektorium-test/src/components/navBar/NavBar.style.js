import styled from "styled-components";

export const Navigation = styled.nav`
padding: 10px;
width: 500px;
display: flex;
justify-content: space-between;
align-items: center;
text-align: center;
font-size: 27px;
font-weight: 300;
line-height: 1;
a{
    font-family: 'Economica', sans-serif;
    text-decoration: none;
    color: #999;
}
a:hover {
    color: #005582	;
}
:last-child{
    margin-right: 0;
}
@media screen and (max-width: 1000px) {
    width: 50%;
    font-size: 25px;
}
@media screen and (max-width: 650px) {
    font-size: 20px;
    width: 50%;
    }
    
@media screen and (max-width: 550px) {
        display: none;
    }
`;