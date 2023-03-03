import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        
    }

    :focus {
        outline: o;
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }

    body {
        background-color: ${props =>props.theme['gray-800']};
        color: ${props=>props.theme['gray-100']};
        -webkit-font-asmoothing: antialiased;
    }

    body, input-security, textarea, button {
        font: 400 1rem Roboto,  sans-serif
    }
`;