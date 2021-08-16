// import React, { Component } from 'react'
// import '../styling/recipe.css';

// import SelectRecipe from './selectRecipe';
// import recipeData from '../recipe-data/recipe.json';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     useHistory,
//     withRouter,
//     Link,
//     NavLink
//   } from "react-router-dom";
  
// // I Can access the data in onther component using (props.location.state)
// export class Recipes extends Component {



//     selectOneRecipe=()=>{

//     }

//     render() {
//         return (
//             <div>
//                 {recipeData.map((recipe)=>{
//                  return   <div id='recipe' >
//                        <h3>
//                            {recipe.name}
//                        </h3>
//                        <p>{recipe.steps}</p>
//                        <img src={recipe.imageURL} alt=""  />
                       
//                        <br/>
//                        <br/>
//                          <Router> 
//                        <Link exact activeClassName="active"  to='/recipe'>show</Link>
//                        <switch>
//                            <Route exact path='/recipe' component={SelectRecipe} /> 
//                        </switch> 
                       
//                             </Router> 
//                    </div> 
//                 })}
             
//             </div>
//         )
//     }
// }

// export default Recipes