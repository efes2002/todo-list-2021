import React from 'react';

class ItemStatusFilter extends React.Component {

    changeFilter = (e)=> {
        this.props.changeFilterButton(e.target.name);
    }

    render() {
        const {filterButton} = this.props;
        const {ALLL, ACTIVE, DONE}= this.props.actions;
        return (
            <div className="btn-group">
                <button type="button"
                        name = "ALLL"
                        className={filterButton === ALLL ? 'btn + btn-info': 'btn + btn-outline-secondary' }
                        onClick={this.changeFilter}>All</button>
                <button type="button"
                        name = "ACTIVE"
                        className={filterButton === ACTIVE ? 'btn + btn-info': 'btn + btn-outline-secondary' }
                        onClick={this.changeFilter}>Active</button>
                <button type="button"
                        name = "DONE"
                        className={filterButton === DONE ? 'btn + btn-info': 'btn + btn-outline-secondary'}
                        onClick={this.changeFilter}>Done</button>
            </div>
        )
    }
}


export default ItemStatusFilter;