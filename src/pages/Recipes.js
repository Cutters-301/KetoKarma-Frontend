import React, { Component } from 'react'
import '../styling/recipe.css';
import axios from 'axios';
import ShowRecipe from '../component/ShowRecipe';



export class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeData: {},
            health: {},
            defaultData: {},

        }
    }
    submitForm = async (e) => {
        e.preventDefault();
        const recipe = e.target.recipeName.value
        const mealType = e.target.mealTypeForm.value
        console.log(recipe);
        console.log(mealType);
        const response =
            await axios.get(`https://api.edamam.com/search?q=${recipe}&app_id=ee24950e&app_key=73c472644b670086c57734e05cd20b05&from=0&to=6&calories=591-722&mealType=${mealType}&health=keto-friendly`);
        console.log(response.data.hits)
        this.setState({
            recipeData: response.data,
            health: mealType
        });
    }

    render() {

      
        return (
            <>
          
                <div class='recipe'>
                    {console.log('recipe', this.state.recipeData)}
                    <p class="title-recipe"> Recipes</p>
                        <img src="https://image.flaticon.com/icons/png/512/1830/1830878.png"
                      alt="" style={{width:'200px',height:"150px","margin-top":"20px"}}  />            
                    <body>
                        <div class="box">
                            <form name="search" onSubmit={this.submitForm}>
                                <input type="text" class="input" name="recipeName"
                                />
                         
                                <label class="custom-select" for="styledSelect1"><select id="styledSelect1" name="mealTypeForm">
                                    
                                    <option value="Breakfast">
                                    Breakfast 
                                    </option>
                                    <option value="Lunch">
                                         Lunch
                                    </option>
                                    <option value="Dinner">
                                         Dinner
                                    </option>
                                    <option value="Snack">
                                         Snack
                                    </option>
                                </select></label>
                            
                                <input class='submit' type="submit" />

                            </form>
                         
                        </div>

                        <div>
                        
                            {this.state.recipeData &&
                                <ShowRecipe

                                    allRecipes={this.state.recipeData}
                                />
                            }
                        </div>
                    </body>
               

                    <br />
                </div>
             
            </>
        )
    }
}
export default Recipes;