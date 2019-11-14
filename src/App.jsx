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
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AllNeos" component={ParentFilters} />
          <Route path="/AllNews" component={AllNews} />
          <Route path="/Glossary" component={Glossary} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
