import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import StickyMenu from './components/StickyMenu/StickyMenu';
import Portfolio from './components/Portfolio/Portfolio';
 

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        
        <Switch>

          <Route exact path="/">
            <Hero />
          </Route>

          <Route path="/skills">
          <h1>SKILLS PAGE</h1>
          </Route>

          <Route path="/portfolio">
            <Portfolio />
          </Route>

        </Switch>

        <StickyMenu />
        
      </div>
    </Router>
    
  );
}

export default App;
