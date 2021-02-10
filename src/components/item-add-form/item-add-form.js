import React from 'react'
import './item-add-form.css'

class ItemAddForm extends React.Component {
    render () {
        const {addItem} = this.props;
        return (
            <form className='item-add-form d-flex'>
                <input type='text'
                       className='form-control'
                       onChange={this.onlabelChange}
                       placeholder='Privet what you have'/>
                <button className='btn btn-outline-secondary'
                        onClick={() => addItem("privet")}>Add Item</button>
            </form>
        )
    }
}

export default ItemAddForm;