import { Component } from "react";
import './search-box.css'

class SearchBox extends Component
{
    render()
    {
        const {onSearchChange, holderString, currentClass} = this.props;
        return(
            <input 
            className={`search-box ${currentClass}`} 
            placeholder={holderString} 
            type='search' 
            onChange={onSearchChange}
            />
        );
    }
}

export default SearchBox;