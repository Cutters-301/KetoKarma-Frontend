import React from 'react';
import Recipes from './component/Recipes';
import recipeData from './recipe-data/recipe.json';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './component/about';
// import { Router } from 'react-router-dom';

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

class App extends React.Component {
 

  render() {
    return (
      <>
 
   </>
    );
  }
}

export default App;