import React from 'react';
import './RecipeApp.css';
import RecipeList from './RecipeList'
import Navbar from './Navbar'

class RecipeApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			recipes : [
				{
					id : 1,
					img : "pasta.jpg",
					title : "Pasta",
					ingredients : ['macroni', 'spices', 'water'],
					instructions : "Mix ingredients"
				},
				{
					id : 2,
					img : "cold-coffee.jpg",
					title : "Cold Coffee",
					ingredients : [ '2 cup milk','2 1/2 teaspoon coffee','1 cup vanilla ice-cream'],
					instructions : "Mix ingredients"
				},
				{
					id : 3,
					img : "egg-bhurji.jpg",
					title : "Egg Bhurji",
					ingredients : ['2-3 eggs','2 tablespoon oil','onoin and green chilli finely chopped'],
					instructions : "Mix ingredients"	
				}
			],
			nextRecipeId : 4 
		}
	}
	render(){
	 return(
	   <div className="App">
	   	<Navbar />
	   	<RecipeList recipes={this.state.recipes}/>
	   </div>  
	 );
	}
}

export default RecipeApp;
