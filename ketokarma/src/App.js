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
import SelectRecipe from './component/selectRecipe';
import about from './component/about';

class App extends React.Component {
 

  render() {
    return (
      <div>
        {/* {console.log(recipeData[0].name)} 
         <Recipes
        recipeData={recipeData}
      
        />  */}

        <Router>
          <Link exact activeClassName="active" to='/recipes'>Recipes </Link>
          <Link exact activeClassName="active" to='/about'>about </Link>

        <switch>
        <Route exact path='/recipes' component={Recipes} /> 
        <Route exact path='/about' component={About} /> 

       </switch>

        </Router>

     </div>
    );
  }
}

export default App;