/* eslint-disable no-undef */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import News from './components/News';
import CardNeoOTD from './components/CardNeoOTD';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import AllNews from './components/AllNews';
import Datepicker from './components/Datepicker';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Datepicker />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/" component={Neos} /> */}
          <Route path="/AllNews" component={AllNews} />
          {/* <Route path="/" component={Glossary} /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
