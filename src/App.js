import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './Components/Home'
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import Navigation from "./Navigation";


function App() {
  return (
        <Router>
          <Route 
          render={(routerProps) =>   
            <Navigation routerProps={routerProps} /> }/>
          <Switch>
            <Route path='/home' 
            render={(routerProps) => 
               <Home routerProps={routerProps}/>}/>
            <Route exact path='/about' 
            render={(routerProps) => 
              <About routerProps={routerProps}/>}/>
            <Route exact path='/contact' 
            render={props => (
               <Contact {...props}/>)}/>
            <Route exact path='/portfolio' 
            render={props => (
               <Portfolio {...props}/>)}/>
          </Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Router>
  );
}

export default App;
