import React from 'react';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom'

import ContactState from './components/context/contact/ContactState'
import Navbar from './components/navbar/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'

function App() {
  return (
    <ContactState>
    <Router>
      <div className="">
      <Navbar title="Phone Book"/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
        </Switch>
        </div>  
      </div>
    </Router> 
    </ContactState>
  );
}

export default App;
