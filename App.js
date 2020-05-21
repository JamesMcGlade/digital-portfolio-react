import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Employment from './Components/Employment'
import Projects from './Components/Projects'

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/employment'>Employment</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path ='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/employment'>
            <Employment />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
