import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../styling/showRecipe.css';
import data_recipes from '../Data/data_recipes.json';




export class ShowRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            method: false,
            ingredients: true,
            data_recipes:data_recipes



        }
    }


    render() {
       
        console.log('recipe from show ', this.props.allRecipes.hits);
       
        return (
            <>
                <Container>
                    <Row xs={1} md={2} className='g-4'>
                        {
                            this.props.allRecipes.hits !== undefined ?
                                this.props.allRecipes.hits.map((recipes, i) => {
                                    return (
                                        <Col key={i}  >
                                          
                                            <div class='recipe-card'>
                                                <div class="recipe-card__body">
                                                    <div><img src={recipes.recipe.image} alt="" /></div>
                                                    <h1 class="recipe-card__heading">{recipes.recipe.label}</h1>
                                                   
                                                    <h6 class="recipe-card__heading">Calories:{parseInt(recipes.recipe.calories)}</h6>
                                                    <h6 class="recipe-card__heading">MealType:{recipes.recipe.mealType}</h6>
                                                    <ul class="recipe-card__nav">
                                                        <li>
                                                            <h3 class="active">Ingredients</h3>
                                                        </li>

                                                    </ul>
                                                    <ul class="recipe-card__ingredients">
                                                        {recipes.recipe.ingredientLines.map((ingredint) => {
                                                            return <li >{ingredint}</li>;
                                                        })}
                                                    </ul>

                                                </div>

                                            </div>
                                        </Col>
                                    )
                                })
                                :    this.state.data_recipes.map((recipes, i) => {
                                    return (
                                        <Col key={i} >
                                            <div class='recipe-card'>
                                                <div class="recipe-card__body">
                                                    <div><img src={recipes.img} alt="" style={{width: '400px',height:'250px'}} /></div>
                                                    <h1 class="recipe-card__heading">{recipes.name}</h1>
                                                    <h6 class="recipe-card__heading">Calories:{parseInt(recipes.calories)}</h6>
                                                    <ul class="recipe-card__nav">
                                                        <li>
                                                            <h3 class="active">Ingredients</h3>
                                                        </li>

                                                        <ul class="recipe-card__ingredients">
                                                        {recipes.ingredients.map((ingredint) => {
                                                            return <li >{ingredint}</li>;
                                                        })}
                                                    </ul>

                                                    </ul>
                                                  

                                                </div>

                                            </div>
                                        </Col>
                                    )
                                })

                             
                        }
                    </Row>
                </Container>
            </>
        )
    }
}
export default ShowRecipe;
