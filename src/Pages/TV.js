import React from 'react'

import TVChoices from '../Components/Choices/TV/TVChoices';

import avalibleChoices from './../data.json';

const TV = (props) => {

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
      <div>
        <h1>TV Shows!</h1>
      </div>
      <div>
        <TVChoices avalibleChoices={avalibleChoices} onBookmark={bookmarkHandler} removeBookmark={removeBookmark}/>
      </div>
    </>
  )
}

export default TV