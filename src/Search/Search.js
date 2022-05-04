import React from "react";
import { ReactSVG } from 'react-svg';

import searchIcon from '../assets/icon-search.svg';
import classes from './Search.module.css';

const Search = () => {

    return (
        <div className={classes.searchDiv} type='text'>
            <ReactSVG src={searchIcon} alt='search icon' className={classes.searchIcon} />
            <input className={classes.searchInput} type='text' /> 
        </div>
    )

}

export default Search;