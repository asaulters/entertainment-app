import React from 'react';

import BookmarkChoices from '../Components/Choices/BookmarkChoices/BookmarkChoices';

const Bookmarks = (props) => {

  const bookmarks = () =>{
    props.bookmarks();
  }

  const removeBookmark =(movieTitle)=>{
    props.removeBookmark(movieTitle)
  }

  return (
    <>
      <div className="">
          <h1>Bookmarks!</h1>
      </div>
      <div>
        <BookmarkChoices bookmarks={props.bookmarks} removeBookmark={removeBookmark}/>
      </div>
    </>

);
}

export default Bookmarks