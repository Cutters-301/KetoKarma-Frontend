import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


  
export class ShowRecipe extends Component {
  
    render() {
        console.log(this.props.allRecipes.hits !==undefined ? this.props.allRecipes.hits :'null');
        return (
         
             <Container>
             <Row xs={1} md={3} className='g-4'>    

               { 

                    this.props.allRecipes.hits !==undefined?
                    this.props.allRecipes.hits.map((recipes,i)=>{
                      
                        
                        return (
                            <Col key={i}>
                                <h1>{recipes.recipe.label}</h1>
                                <img src={recipes.recipe.image} alt=""/>
                                <p>{recipes.recipe.ingredientLines}</p>
                                <p>{recipes.recipe.calories}</p>
                                </Col>
               
               )
               
            })
            :'null'
            
            
        } 

        </Row>
     </Container> 
               
           
           
        )
    }
}

export default ShowRecipe
