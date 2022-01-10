import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import AboutMe from './Components/AboutMe/AboutMe';
import Content from './Components/Content/Content';
import Contact from './Components/Contact/Contact';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        {/* <Route path="/contact">
          <Contact/>
        </Route> */}
        <Route path="/">
          <Intro></Intro>
          <AboutMe></AboutMe>
          <Content></Content>
        </Route>
      </Switch>


    </div>
  );
}

export default App;
