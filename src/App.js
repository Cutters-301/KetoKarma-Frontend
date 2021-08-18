import React from 'react';
import Recipes from './pages/Recipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './pages/Profile';
import LoginButton from './component/LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import About from './pages/Aboutus';
import Nutrition from './pages/Nutrition';

import {
  BrowserRouter as Router,
  Switch,
  Route,


} from "react-router-dom";



class App extends React.Component {

  render() {
    return (
      <>
       
         <Router>
            <Switch>
              <Route exact path="/">
              <Home />
              {this.props.auth0.isAuthenticated && <LoginButton/>}
              </Route>
              <Route exact path="/profile">
                <Profile/>
              </Route>
              <Route exact path="/about-us">
                <About/>
              </Route>
              <Route exact path="/recipe" component={Recipes} />
              <Route exact path="/nutrition">
                <Nutrition/>
              </Route>
              {/* <Route exact path="/calculator">
                <Calculator/>
              </Route> */}
            </Switch>
        </Router>
      </>
      
    );
  }
}

export default withAuth0(App);