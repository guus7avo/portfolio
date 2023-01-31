import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import Content from "../components/ContentSection/Content";
import { about } from "../components/ContentSection/ContentData";
import Project from "../components/ProjectSection/Project";
import Footer from "../components/Footer/Footer";
import Skills from "../components/SkillsSection/Skills";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/Theme";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(null);
  const isDarkTheme = theme === "dark";

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  return (
    <>
      <ThemeProvider theme={isDarkTheme ? lightTheme : darkTheme}>
        <Sidebar
          isOpen={isOpen}
          toggle={toggleNavbar}
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <Navbar
          toggle={toggleNavbar}
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <Hero />
        <Content {...about} />
        <Skills />
        <Project />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Home;
