import React from 'react';
import Recipes from './component/recipes';
import recipeData from './recipe-data/recipe.json';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends React.Component {
 

  render() {
    return (
      <div>
       {/* {console.log(recipeData[0].name)} */}
        <Recipes
        recipeData={recipeData}
        
        />
      
     </div>
    );
  }
}

export default App;