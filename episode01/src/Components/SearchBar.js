const { findRenderedDOMComponentWithClass } = require("react-dom/test-utils");

import React from 'react'
import PropTypes from "prop-types";

const getInput=(event)=>event.target.value;

const SearchBar=({filterText,onUserInput})=>(
    <input
       type="search"
       placeholder="search"
       value={filterText}
       onChange={event=>onUserInput(getInput(event))}
       />

);

SearchBar.prototype={
    onUserInput:PropTypes.func.isRequired,
    filterText:PropTypes.string.isRequired
}

export default SearchBar