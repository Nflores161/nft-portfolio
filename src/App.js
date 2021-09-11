import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home'
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";

function App() {
  return (
    <div>
      <Home />
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' 
            render={props => (
               <Home {...props}/>)}/>
            <Route exact path='/about' 
            render={props => (
               <About {...props}/>)}/>
            <Route exact path='/contact' 
            render={props => (
               <Contact {...props}/>)}/>
            <Route exact path='/portfolio' 
            render={props => (
               <Portfolio {...props}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
