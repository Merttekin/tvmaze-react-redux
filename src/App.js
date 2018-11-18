import React, { Component } from 'react';
import './App.sass';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/Navigation';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/about/:id" component={About}></Route>
              <Route component={Error}></Route>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({movies}) => {
  return{
      movies
  }
}

export default connect(mapStateToProps)(App);
