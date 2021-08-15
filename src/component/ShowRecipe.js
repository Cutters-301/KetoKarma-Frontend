import React, { Component } from 'react'

export class ShowRecipe extends Component {
    render() {
        console.log('recipe from show',this.props.allRecipes.hits);
        return (
            <div>
               {
                //    this.props.allRecipes.map((recipe)=>{
                //        return (
                //            <div>
                //                <h1>{recipe.label}</h1>
                //                <img src={recipe.imgurl} alt=""/>
                //            </div>
                //        )
                //    })
               } 

            <h1>omaima</h1>
            <p> {this.props.allRecipes.hits.label}</p>
            </div>
        )
    }
}

export default ShowRecipe
