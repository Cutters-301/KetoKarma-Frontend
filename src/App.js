import React from 'react';

// import Recipes from 'src/component/Recipes';
// import recipeData from 'src/recipe-data/recipe';
// import Header from 'src/component/Header';
// import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home';
import AboutUs from './pages/aboutus';
// import Landing from './pages/landing';
import { withAuth0 } from "@auth0/auth0-react";



import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  withRouter,
  Link,
  NavLink,

} from "react-router-dom";

// import SelectRecipe from 'src/pages/selectRecipe';



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
          <Switch>
            <Route exact path="/home">
                   
            </Route>
            <Route exact path="/aboutus">
                   <AboutUs />
            </Route>

          </Switch>


        </Router>
      </>

    );
  }
}

export default withAuth0(App);