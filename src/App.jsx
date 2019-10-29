/* eslint-disable no-undef */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact-path="/" component={Home} />
          <Route exact-path="/" component={newsPage} />
          <Route exact-path="/" component={FilterResults} />
          <Route exact-path="/" component={Glossary} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
