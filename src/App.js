import React from 'react';
import logo from './logo.svg';
import './App.css';

import ProgressBar from './components/progressbar';
import Home from './components/home';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div class="page">
      <div>
      <Switch>
      <Route exact path ='/me/'><Home/></Route>
      <Route path ='/me/home'><Home/></Route>
      <Route path = '/me/about' component = {About}/>
      <Route path = '/me/contact' component = {Contact}/>
      <Route path = '/me/projects' component = {Projects}/>
      </Switch>
      <Footer></Footer>
      </div>
    </div>
    </Router>
  );
}

export default App;
