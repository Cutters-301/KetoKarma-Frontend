import React, { Component } from 'react'
import '../styling/recipe.css';
import axios from 'axios';
import ShowRecipe from './ShowRecipe';
import recipeData from '../recipe-data/recipe.json';


// I Can access the data in onther component using (props.location.state)
export class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          recipeData: {},
          health:{}
        }
      }
      submitForm=async(e)=>{
        e.preventDefault();
        const recipe=e.target.recipeName.value
        const mealType=e.target.mealTypeForm.value 
        console.log(recipe);
        console.log(mealType);
        const response = 
        await axios.get(`https://api.edamam.com/search?q=${recipe}&app_id=ee24950e&app_key=73c472644b670086c57734e05cd20b05&from=0&to=7&calories=591-722&mealType=${mealType}`);
        console.log(response.data)   
        this.setState({
            recipeData: response.data,
            health:mealType
        });   
    }
    render() {
        return (
            <div class='recipe'>
                   {console.log('recipe',this.state.recipeData)}
            <h1 > Recipe</h1>
            <form className="form" onSubmit={this.submitForm}>
                <input class='input' type='text' placeholder='enter ingridient' name='recipeName' />
                <select class='meal' name='mealTypeForm'> 
                   <option value='Breakfast'>Breakfast</option>
                   <option value='Lunch'>Lunch</option>
                   <option value='Dinner'>Dinner</option>
                   <option value='Snack'>Snack</option>
                </select>
                <input class='submit' type="submit" value="search recipe" />
            </form>
                {console.log('recipe file',recipeData)} 
            <div>
               { this.state.recipeData &&
                   <ShowRecipe
                
                    allRecipes={this.state.recipeData}
                     />
               }
            </div>
            </div>
            // <div>
            //     {recipeData.map((recipe)=>{
            //      return   <div id='recipe' >
            //            <h3>
            //                {recipe.name}
            //            </h3>
            //            <p>{recipe.steps}</p>
            //            <img src={recipe.imageURL} alt=""  />
            //            <br/>
            //            <br/>
                         /* <Router> 
                       <Link exact activeClassName="active"  to='/recipe'>show</Link>
                       <switch>
                           <Route exact path='/recipe' component={SelectRecipe} /> 
                       </switch> 
                            </Router>  */
                //    </div> 
                // })}
        //  /   </div>
        )
    }
}
export default Recipes;