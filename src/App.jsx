/* eslint-disable no-undef */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import AllNews from './components/AllNews';
import Glossary from './components/Glossary';
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/" component={Neos} /> */}
          <Route path="/AllNews" component={AllNews} />
          <Route path="/Glossary" component={Glossary} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
