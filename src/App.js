import logo from './logo.svg';
//import './App.css';

import React from "react";
import Project from './comps/Project';
import Navbar from './comps/Navbar';
import About from './comps/About';
import Skills from './comps/Skills';
import Contact from "./comps/Contact";
import {createContext,useEffect,useState} from "react";

function App() {
  const [projects,setProjects] = useState(0);
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>
  );
}

export default App;
