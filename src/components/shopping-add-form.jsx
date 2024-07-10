import React from "react"

class ShoppingAddForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: "Buy",
			number: ""
		}
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onAdd = () => {
		const data = {
			title: this.state.title,
			number: this.state.number
		}

		if(!data.number.length || !data.title.length) {
			alert("All field should be completed")
		} else {
			this.props.onAdd(data);
		}
	}

	render() {
		const {title, number} = this.state
		return (
			<div className='form'>
				<input onChange={this.onChange} type="text" className='title' placeholder='Title...' name="title" value={title}/>
				<input onChange={this.onChange} type='number' className='number' placeholder='14' name="number" value={number}/>
				<button onClick={this.onAdd}>Add</button>
			</div>
		)
	}
}

export default ShoppingAddForm