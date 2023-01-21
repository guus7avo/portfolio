import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/HeroSection/Hero";
import Content from "../components/ContentSection/Content";
import {
  homeObjOne,
  homeObjTwo,
} from "../components/ContentSection/ContentData";
import Project from "../components/ProjectSection/Project";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <Content {...homeObjOne} />
      <Content {...homeObjTwo} />
      <Project />
      <Content {...homeObjTwo} />
    </>
  );
};

export default Home;
