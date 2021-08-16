import React, { Component } from 'react'
import '../styling/recipe.css';
import axios from 'axios';
import ShowRecipe from '../component/ShowRecipe';
import Header from '../component/Header';
import Footer from '../component/Footer'


// I Can access the data in onther component using (props.location.state)
export class Recipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipeData: {},
            health: {},
            defaultData:{},

        }
    }
    submitForm = async (e) => {
        e.preventDefault();
        const recipe = e.target.recipeName.value
        const mealType = e.target.mealTypeForm.value
        console.log(recipe);
        console.log(mealType);
        const response =
            await axios.get(`https://api.edamam.com/search?q=${recipe}&app_id=ee24950e&app_key=73c472644b670086c57734e05cd20b05&from=0&to=7&calories=591-722&mealType=${mealType}`);
        console.log(response.data.hits)
        this.setState({
            recipeData: response.data,
            health: mealType
        });
    }

  
      getDefaultRecipe=async()=>{
        const response= await axios.get(`https://api.edamam.com/search?q=meat&app_id=ee24950e&app_key=73c472644b670086c57734e05cd20b05&from=0&to=3&calories=591-722&health=keto-friendly`);
        this.setState({
            defaultData: response.data
            
        });
        
    }
    componentDidMount(){
        this.getDefaultRecipe();}

    render() {

        // getDefaultRecipe()
        return (
            <>
            <Header />
            <div class='recipe'>
                {console.log('recipe', this.state.recipeData)}
                <h1 > Recipe</h1>
                {/* <head>
                    <meta charset="UTF-8" />
                    <link rel="stylesheet" href="style.css" />
                    <link rel="stylesheet" href="fontawesome-free-5.15.1/css/all.css" />
                    <title>Search</title>
                    <script src="https://kit.fontawesome.com/afd6aa68df.js" crossorigin="anonymous"></script>
                </head> */}
                <body>
                    <div class="box">
                        <form name="search" onSubmit={this.submitForm}>
                            <input type="text" class="input" name="recipeName"
                            />
                            <select class='meal' name='mealTypeForm'>
                                <option value='Breakfast'>Breakfast</option>
                                <option value='Lunch'>Lunch</option>
                                <option value='Dinner'>Dinner</option>
                                <option value='Snack'>Snack</option>
                            </select>
                            <input class='submit' type="submit" value="search recipe" />

                        </form>
                        {/* <i class="fas fa-search"></i> */}
                    </div>

                <div>
                {/* {console.log('jjjjjjjjjjjjjjjjjj',this.state.defaultData)} */}
                {this.state.recipeData &&
                    <ShowRecipe
                    
                    allRecipes={this.state.recipeData}
                    // defaultData={this.state.defaultData}
                 
                    />
                }
                </div>
                </body>
                {/* <form className="form" onSubmit={this.submitForm}>
                <input class='input' type='text' placeholder='enter ingridient' name='recipeName' />
                <select class='meal' name='mealTypeForm'> 
                <option value='Breakfast'>Breakfast</option>
                <option value='Lunch'>Lunch</option>
                <option value='Dinner'>Dinner</option>
                <option value='Snack'>Snack</option>
                </select>
            </form> */}

                <br />
            </div>
                <Footer />
            </>
        )
    }
}
export default Recipes;