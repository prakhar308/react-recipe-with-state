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
			nextRecipeId : 3,
			showForm : false 
		}

		this.handleSave = this.handleSave.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleSave(recipe){
		this.setState((prevState, props) => {
			const newRecipe = {...recipe, id : this.state.nextRecipeId};
			return {
				recipes : [...this.state.recipes, newRecipe],
				nextRecipeId : prevState.nextRecipeId + 1,
				showForm : false
			}
		})
	}

	handleDelete(id){
		const recipes = this.state.recipes.filter((r) => r.id !== id);
		this.setState({recipes});
	}

	render(){
		const {showForm} = this.state;
		return(
		<div className="App">
			
			<Navbar onNewRecipe={() => this.setState({showForm : true})}/>
			
			{showForm ? 
				<RecipeInput 
					onClose={() => this.setState({showForm : false})}
					onSave={this.handleSave}
				/> : null
			}
			
			<RecipeList onDelete={this.handleDelete} recipes={this.state.recipes}/>
		</div>  
		);
	}
}

export default RecipeApp;
