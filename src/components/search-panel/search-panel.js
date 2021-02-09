import React from "react";
import './search-panel.css'

const SearchPanel = () => {
    const searchStyle = {
        fontSize: "22px"
    };
    return <input className='search-input' style={searchStyle} placeholder="search" />;
};
export default SearchPanel;
