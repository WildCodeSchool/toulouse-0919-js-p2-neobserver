import React from 'react';
import Footer from './components/Footer';
import {Switch, Route} from "react-router-dom";

class App extends React.Component{

  render(){
    return (
    <div>
      <Switch>
        <Route exact-path="/" component={Home}/>
        <Route exact-path="/" component={}/>
        <Route exact-path="/" component={}/>
        <Route exact-path="/" component={}/>
        <Route exact-path="/" component={}/>
      </Switch>
      <Footer />
    </div>
    )
}
}

export default App;
