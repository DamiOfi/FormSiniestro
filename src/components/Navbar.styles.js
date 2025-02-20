
import styled, { keyframes } from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: var(--background-primary);
  border-bottom: 1px solid hsl(var(--border));
`;

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--text);
`;

export const NavbarTitle = styled.h1`
  font-size: 1.5rem;
`;

export const ThemeButton = styled.button`
  padding: 8px 12px;
  background-color: var(--primary);
  color: #FFFFFF;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  &:hover {
    background-color: var(--secondary);
  }
`;


// Animación de entrada suave
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5) rotate(-10deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;

// Animación para el hover
const hoverEffect = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Estilo del contenedor del logo
export const Logo = styled.img`
  width: 50px;
  animation: ${fadeIn} 1s ease-out; // Animación al cargar
  transition: transform 0.3s ease-in-out;

  &:hover {
    animation: ${hoverEffect} 0.6s ease-in-out;
  }
`;
