import React from 'react';

// import Recipes from 'src/component/Recipes';
// import recipeData from 'src/recipe-data/recipe';
// import Header from 'src/component/Header';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home';
// import Landing from './pages/landing';
import { withAuth0 } from "@auth0/auth0-react";
// import About from 'src/pages/about';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter,
  Link,
  NavLink,

} from "react-router-dom";

import about from './component/about';

// import SelectRecipe from 'src/pages/selectRecipe';
// import about from 'src/pages/about';



class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    return (


      <>

        <Router>
          <Switch>

            <Route exact path="/">
              {
                // !isAuthenticated
                //   ? <Landing />
                  // : 
                  <Home />
              }
            </Route>
          </Switch>

          <Footer />
        </Router>
      </>


    );
  }
}

export default withAuth0(App);