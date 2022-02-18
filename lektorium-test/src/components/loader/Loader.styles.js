import styled from "styled-components";

export const Loader = styled.div`
    border: 5px solid #222;
    border-top: 5px solid #888;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    animation: spin 0.8s linear infinite;
    align-self: center;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;