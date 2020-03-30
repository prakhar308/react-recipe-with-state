import React from 'react';
import './RecipeList.css'
import Recipe from './Recipe'

class RecipeList extends React.Component{

	static defaultProps = {
		recipes : [
			{
				img : "pasta.jpg",
				title : "Pasta",
				ingredients : ['macroni', 'spices', 'water'],
				instructions : "Mix ingredients"
			},
			{
				img : "cold-coffee.jpg",
				title : "Cold Coffee",
				ingredients : [ '2 cup milk','2 1/2 teaspoon coffee','1 cup vanilla ice-cream'],
				instructions : "Mix ingredients"
			},
			{
				img : "egg-bhurji.jpg",
				title : "Egg Bhurji",
				ingredients : ['2-3 eggs','2 tablespoon oil','onoin and green chilli finely chopped'],
				instructions : "Mix ingredients"	
			}
		]
	}

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