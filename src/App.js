import React from 'react';

// import Recipes from 'src/component/Recipes';
// import recipeData from 'src/recipe-data/recipe';
// import Header from 'src/component/Header';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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

// import SelectRecipe from 'src/pages/selectRecipe';
// import about from 'src/pages/about';


class App extends React.Component {
 

  render() {
    return (

      
         <>
        <Router>
       
      <Footer />
      </Router>
      </>

    );
  }
}

export default App;