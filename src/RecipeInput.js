import React from 'react'
import './RecipeInput.css'

class RecipeInput extends React.Component{
	static defaultProps = {
		onSave() {},
		onClose() {}
  	}

	constructor(props){
		super(props);
		this.state = {
			title : '',
			instructions : "",
			ingredients : [''],
			img : ''
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeIng = this.handleChangeIng.bind(this);
		this.handleNewIngredient = this.handleNewIngredient.bind(this);

	}

	handleNewIngredient(){
		const {ingredients} = this.state;
		this.setState({ingredients : [...ingredients, '']});
	}

	handleChangeIng(e){
		const index = Number(e.target.name.split('-')[1]);
		const ingredients = this.state.ingredients.map((ing, i) => (
			i === index ? e.target.value : ing
		));
		this.setState({ingredients});
	}

	handleChange(e){
		this.setState({[e.target.name] : e.target.value});
	}

	resetInput(){
		this.setState({
			title : '',
			instructions : "",
			ingredients : [''],
			img : ''	
		});
	}

	handleSubmit(e){
		e.stopPropagation();
		this.props.onSave({...this.state});
		this.resetInput();
	}	

	render(){
		
		const {title, instructions, img, ingredients} = this.state;
    	const {onClose} = this.props;
		
    	// create recipe ingredient element
    	// every ingredient will have it's own input text
    	const ingredientsElement = ingredients.map((ing, i) => (
    		<div
    			className='recipe-form-line'
    			key={`ingredient-${i}`}
    		>
    			<label>{`${i+1}.`}
					<input
						type="text"
						name={`ingredient-${i}`}
						value={ing}
						size={45}
						placeholder=" Ingredient"
						onChange={this.handleChangeIng}/>
					</label>
    		</div>
    	))

		return(
			<div className='recipe-form-container'>
				<form className='recipe-form' onSubmit={this.handleSubmit}>
					
					{/* button to close the input form */}
					<button
		            type="button"
		            className="close-button"
		            onClick={onClose}
		         >
		         X
		         </button>

		         {/* recipe title input */}
		         <div className='recipe-form-line'>
						<label htmlFor='recipe-title-input'>Title</label>
						<input
							id='recipe-title-input'
							key='title'
							name='title'
							type='text'
							value={title}
							size={42}
							onChange={this.handleChange}/>
					</div>

					{/* recipe instructions textarea */}
					<label
		            htmlFor='recipe-instructions-input'
		            style={{marginTop: '5px'}}
		         >
		         Instructions
		         </label>
		         <textarea
		          	key='instructions'
		            id='recipe-instructions-input'
		            // type='Instructions'
		            name='instructions'
		            rows='8'
		            cols='50'
		            value={instructions}
		            onChange={this.handleChange}
		         />

		      	{/* recipe ingredients element */}
		      	{ingredientsElement}

		      	{/* button to add new ingredient */}
		      	<button
		            type="button"
		            onClick={this.handleNewIngredient}
		            className="buttons"
		         >
		         +
		         </button>

		      	{/* recipe image url input */}
		      	<div className='recipe-form-line'>
		            <label htmlFor='recipe-img-input'>Image Url</label>
		            <input
							id='recipe-img-input'
							type='text'
							placeholder=''
							name='img'
							value={img}
							size={36}
							onChange={this.handleChange} />
		         </div>

		         {/* button to submit new recipe*/}
		         <button
		            type="submit"
		            className="buttons"
		            style={{alignSelf: 'flex-end', marginRight: 0}}
		         >
					SAVE
		         </button>	

				</form>
			</div>
		)
	}
}


export default RecipeInput;