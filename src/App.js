import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootswatch/dist/lux/bootstrap.min.css";
import './App.css';
import AboutMe from "./pages/aboutMe";
import ContactMe from "./pages/contactMe";
import ViewWork from "./pages/viewWork";
import Home from "./pages/home";
import NavigationBar from './components/navbar/navbar';
import "./style.css"

function App() {
  return (
    <Router>
      <NavigationBar>

      </NavigationBar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/reactPortfolio" component={Home} />
        <Route exact path="/aboutMe" component={AboutMe} />
        <Route exact path="/contactMe" component={ContactMe} />
        <Route exact path="/viewWork" component={ViewWork} />
      </Switch>
    </Router>
  );
}

export default App;
