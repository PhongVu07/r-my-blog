import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NaviBar from "./components/NaviBar"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Portfolio from "./pages/Portfolio"
import AboutMe from "./pages/AboutMe"
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
      <NaviBar />


      <Switch>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route path="/aboutme">
            <AboutMe />
          </Route>

          <Route path="/">
            <Home />
          </Route>
      </Switch>

      <Footer />
      </div>
    </Router>
  );
}

export default App;
