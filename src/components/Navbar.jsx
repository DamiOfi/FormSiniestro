import React, { useState } from "react";
import { NavbarContainer, FormTitle, ThemeButton, Logo } from "./Navbar.styles"; // Importa el estilo del logo
import logo from "../assets/logoOfi.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <NavbarContainer className="flex justify-between items-center">
      <Logo src={logo} alt="Ico" />
      <FormTitle className="flex justify-between items-center">Formulario de siniestro</FormTitle>
      <ThemeButton onClick={toggleDarkMode}>
        {darkMode ? "Modo Claro" : "Modo Oscuro"}
      </ThemeButton>
    </NavbarContainer>
  );
};

export default Navbar;
