import React from 'react';
// import Recipes from './component/Recipes';
// import recipeData from './recipe-data/recipe.json';
// import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import About from './component/about';
// import { Router } from 'react-router-dom';
// import Header from './component/Header';
// import Laptop from './component/laptop';
import Profile from './Profile';
import LoginButton from './component/LoginButton';
import { withAuth0 } from '@auth0/auth0-react';
import Home from './component/Home';
// import Footer from './component/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useHistory,
  // useLocation
  // withRouter,
  // Link,
  // NavLink,

} from "react-router-dom";
// import SelectRecipe from './component/selectRecipe';
// import about from './component/about';

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
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            </Switch>
        </Router>
      </>
      
    );
  }
}

export default withAuth0(App);