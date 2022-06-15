import React from "react";
import { useGlobalContext } from "../Components/Store/GlobalContext";

import avalibleChoices from '../data.json'
import MovieChoices from '../Components/Choices/Movies/MovieChoices'

import classes from './Home.module.css';

const Movies = (props) => {

  const { state } = useGlobalContext();

  const bookmarkHandler= (newChoice)=> {
    // props.bookmarkHandler(newChoice)
    // console.log(newChoice);
    props.bookmark(newChoice);
  }

  const removeBookmark =(movieTitle)=>{
    props.removeBookmark(movieTitle)
  }

  return (
      <>
      <div className={classes.mainDiv}>
            <h1>Movies!</h1>
        </div>
        <div>
          <MovieChoices avalibleChoices={avalibleChoices} onBookmark={bookmarkHandler} removeBookmark={removeBookmark}/>
        </div>
      </>

  );

};
  
export default Movies;