import React from "react";

import avalibleChoices from '../data.json'
import MovieChoices from '../Components/Choices/Movies/MovieChoices'

const Movies = (props) => {

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
        <div className="">
            <h1>Movies!</h1>
        </div>
        <div>
          <MovieChoices avalibleChoices={avalibleChoices} onBookmark={bookmarkHandler} removeBookmark={removeBookmark}/>
        </div>
      </>

  );
};
  
export default Movies;