import React, {useState} from "react";
import { ReactSVG } from 'react-svg';

import searchIcon from '../../assets/icon-search.svg';
import Movies from "../../Pages/Movies";
import classes from './Search.module.css';

const Search = (props) => {

    const [searchValue, setSearchValue] = useState('');

    const keyPress = (e) => {
        //target user value
        console.log(e.key)
        // set seachValue to user value
        setSearchValue(e.target.value)
        // call searchHandler method when e.target === "Enter"
        if(e.key === "Enter"){
            console.log('enter has been hit!')
            searchHandler(searchValue)
            //return search val to ''
            e.target.value ='';
        };
    }

    const searchHandler = (searched) => {
        // console.log('searched for ' + searchValue);
        //check for val in search if so check avalibleMovies

        if(searched == '') {
            setSearchValue('');
            console.log('empty search bar');
        } else {props.avalibleMovies.filter((movie) => 
            movie.title.toLowerCase().includes(searched)).map((movie) =>{
                // console.log(movie.title);
                props.searched(movie)
                setSearchValue('');
            })
            
        }
        


    }

    return (
        <div className={classes.searchDiv} type='text'>
            <ReactSVG src={searchIcon} alt='search icon' className={classes.searchIcon} />
            <input 
            className={classes.searchInput} 
            type='text' 
            placeholder="  Search..."
            onKeyPress={keyPress}/> 
        </div>
    )

};

export default Search;