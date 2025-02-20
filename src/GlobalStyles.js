import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  :root {
    --background-primary: #FFFFFF;
    --background-secondary: #f9f9f9;
    --background-form: #f9f9f9;
    --color-inputs: #FFFFFF;
    --text: #040914;
    --text-form: #040914;
    --text-secondary: #EFF6FB;
    --primary: #8c0000;
    --secondary:#530000;
    --tertiary:#4b4b55;
    --radius: 0.5rem;
  }

  .dark {
    --background-primary: #1F2937;
    --background-secondary: #111826;
    --background-form: #1F2937;
    --text: #ffffff;
    --text-secondary: #bbbec0;
    --text-form: #bbbec0;
    /* --primary: #eb918e; */
    --color-inputs: #384251;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: var(--background-secondary);
    color: var(--foreground);
    animation: fadeIn 1s ease-in-out; /* Aplica la animación */
  }
  
  h1, h2 {
    margin: 0;
  }
`;
