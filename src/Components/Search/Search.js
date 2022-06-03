import React, {useState} from "react";
import { ReactSVG } from 'react-svg';

import searchIcon from '../../assets/icon-search.svg';
import classes from './Search.module.css';

const Search = (props) => {

    const [searchValue, setSearchValue] = useState('');

    const keyPress = (e) => {
        // watch for change
        //target user value
        console.log(e.key)
        // set seachValue to user value
        setSearchValue(e.target.value)
        // call searchHandler method when e.target === "Enter"
        if(e.key === "Enter"){
            console.log('enter has been hit!')
            searchHandler(searchValue)
        }
    }

    const searchHandler = (searched) => {
        // check avalibleMovies for searched
        console.log('searched for ' + searchValue);
        const filteredMovies = props.avalibleMovies.toLowerCase();
        // const newFilter = filteredMovies.filter((movie) => movie.title == searched);
        const newFilter = filteredMovies.contains(searched)
        console.log(newFilter)
        // props.avalibleMovies.filter((movie) => movie.title === searched).map((movie)=> {
        //     console.log('Found ' + movie.title)
        // })
        // display matches matches
    }

    return (
        <div className={classes.searchDiv} type='text'>
            <ReactSVG src={searchIcon} alt='search icon' className={classes.searchIcon} />
            <input className={classes.searchInput} type='text' onKeyPress={keyPress}/> 
        </div>
    )

};

export default Search;