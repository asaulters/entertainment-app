import React from 'react';

import BookmarkChoices from '../Components/Choices/BookmarkChoices/BookmarkChoices';

import classes from '../Pages/Home.module.css'

const Bookmarks = (props) => {

  const bookmarks = () =>{
    props.bookmarks();
  }

  const removeBookmark =(movieTitle)=>{
    props.removeBookmark(movieTitle)
  }

  return (
    <>
      <div className={classes.mainDiv}>
          <h1>Bookmarks!</h1>
      </div>
      <div>
        <BookmarkChoices bookmarks={props.bookmarks} removeBookmark={removeBookmark}/>
      </div>
    </>

);
}

export default Bookmarks