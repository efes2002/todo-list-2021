import React from 'react'
import './item-add-form.css'

class ItemAddForm extends React.Component {
    state = {
        label: ''
    };
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({label: ''});
    };

    render () {
        return (
            <form className='item-add-form d-flex'
                  onSubmit={this.onSubmit}>
                <input type='text'
                       id="id3"
                       className='form-control'
                       onChange={this.onLabelChange}
                       placeholder='Privet what you have'
                       value={this.state.label}/>
                <button className='btn btn-outline-secondary'
                        >Add Item</button>
            </form>
        )
    }
}

export default ItemAddForm;