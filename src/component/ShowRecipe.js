import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import '../styling/showRecipe.css';
// import axios from 'axios';




export class ShowRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
           method:false,
           ingredients:true,

          
            
        }
    }
 

    render() {

        console.log('recipe from show ',this.props.allRecipes.hits);
        // const calories=0; 
        return (
            
            <>
            <Container>
          <Row xs={1} md={2} className='g-4'>
            {
                this.props.allRecipes.hits !== undefined ?
                this.props.allRecipes.hits.map((recipes, i) => {
                    return (
                        <Col key={i}>
                        {/* { const calories = parseInt({recipes.recipes.calories})}; */}
                         
                        {/* const fixed = calories.toFixed() */}
                        <div class='recipe-card'>
                            <div class="recipe-card__body">
                                <div><img src={recipes.recipe.image}  alt="" /></div>
                                <h1 class="recipe-card__heading">{recipes.recipe.label}</h1>
                                {/* <h6>Calories{fixed}</h6> */}
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
                    : []
                    
                    
                    
                    
                    }
                      </Row>
                    </Container>
                    </>
    )
}
}
export default ShowRecipe;