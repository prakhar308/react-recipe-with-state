import React from 'react';
import './RecipeList.css'
import Recipe from './Recipe'

class RecipeList extends React.Component{
	render(){
		const recipes = this.props.recipes.map((r,index) => (
			<Recipe key={index} {...r}/>
		))
		return(
			<div className="recipe-list">
				{recipes}
			</div>
		)
	}
}

export default RecipeList;