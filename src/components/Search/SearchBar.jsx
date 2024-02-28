import React, {useState} from 'react';
import "./SearchBar.scss"

const SearchBar = ({setSearch}) => {
    const [searchValue, setSearchValue] = useState( '')
    const handleSetSearch = (e) => {
        e.preventDefault();
        let val = e.target.value
        setSearchValue(val);
        setSearch(val);
    };
    const handleClick = () => {
        setSearch(searchValue);
    };
    return (
        <div className='search_wrapper'>
            <button onClick={handleClick} className="search-icon"/>
            <input className="search_wrapper--input"
                   onChange={handleSetSearch}
                   placeholder="Search your trip"/>
        </div>
    );
};

export default SearchBar;
