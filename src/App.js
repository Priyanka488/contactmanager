//Broser Router does not work very well with github pages, so we use HashRouter

import React from 'react';
import Contacts from './components/Contacts/Contacts';
import AddContact from './components/Contacts/AddContact'
import EditContact from './components/Contacts/EditContact';

import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';

import {Provider} from './context';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';

function App() {
   
  return (
      <Provider >
      <Router>
    <div className="App">
        <Header branding="Contact Manager 1"/>
      <div className="container">
      <Switch>
      <Route exact path="/" component={Contacts}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/contact/add" component={AddContact}/>
      <Route exact path="/test" component={Test}/>
    <Route exact path="/contact/edit/:id" component={EditContact}/>

     <Route  component={NotFound}/>

      </Switch>
      </div>
        </div>
      </Router>
      </Provider>
  );
}

export default App;
