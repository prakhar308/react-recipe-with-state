import React from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList'
import RecipeInput from './RecipeInput'
import Navbar from './Navbar'

class RecipeApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			recipes : [
				{
					id : 0,
					img : "pasta.jpg",
					title : "Pasta",
					ingredients : ['macroni', 'spices', 'water'],
					instructions : "Mix ingredients"
				},
				{
					id : 1,
					img : "cold-coffee.jpg",
					title : "Cold Coffee",
					ingredients : [ '2 cup milk','2 1/2 teaspoon coffee','1 cup vanilla ice-cream'],
					instructions : "Mix ingredients"
				},
				{
					id : 2,
					img : "egg-bhurji.jpg",
					title : "Egg Bhurji",
					ingredients : ['2-3 eggs','2 tablespoon oil','onoin and green chilli finely chopped'],
					instructions : "Mix ingredients"	
				}
			],
			nextRecipeId : 3 
		}

		this.handleSave = this.handleSave.bind(this);
	}

	handleSave(recipe){
		this.setState((prevState, props) => {
			const newRecipe = {...recipe, id : this.state.nextRecipeId};
			return {
				recipes : [...this.state.recipes, newRecipe],
				nextRecipeId : prevState.nextRecipeId + 1
			}
		})
	}

	render(){
	 return(
	   <div className="App">
	   	<Navbar />
	   	<RecipeInput onSave={this.handleSave}/>
	   	<RecipeList recipes={this.state.recipes}/>
	   </div>  
	 );
	}
}

export default RecipeApp;
