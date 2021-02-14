import React from "react";
import './search-panel.css'

class SearchPanel extends React.Component {

    onSearchChange = (e) => {
        this.props.changeSearchDefaultValue(e.target.value);
    }

    render () {
        return (
            <div>
                <input type="text"
                       className="form-control search-input"
                       placeholder="type to search"
                       onChange={this.onSearchChange}
                       value={this.props.searchDefaultValue}
                />
            </div>

            )
    }
}


export default SearchPanel;
