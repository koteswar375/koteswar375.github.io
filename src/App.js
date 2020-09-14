import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import AboutMe from './Components/AboutMe/AboutMe';
import Content from './Components/Content/Content';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Intro></Intro>
        <AboutMe></AboutMe>
        <Content></Content>
    </div>
  );
}

export default App;
