/* eslint-disable no-undef */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import AllNews from './components/AllNews';
import Glossary from './components/Glossary';
import ParentFilters from './components/ParentFilters';
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <div style={{ backgroundColor: 'black' }}>
              <Nav />
            </div>
            <Home />
          </Route>
          <Route path="/AllNeos">
            <Nav />
            <ParentFilters />
          </Route>
          <Route path="/AllNews">
            <Nav />
            <AllNews />
          </Route>
          <Route path="/Glossary">
            <Nav />
            <Glossary />
          </Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
