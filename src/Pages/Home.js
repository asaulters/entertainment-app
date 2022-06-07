
import React, { useEffect } from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";


import Recomended from '../Components/Choices/Recommended/Recomended';
import Trending from '../Components/Choices/Trending/Trending';

import classes from './Home.module.css';

import BkmrkCtx from '../Components/Store/ContextProvider'
import avalibleMovies from '../data.json'
  
const Home = (props) => {

  const bookmarkHandler= (newChoice)=> {
    // props.bookmarkHandler(newChoice)
    // console.log(newChoice);
    props.bookmark(newChoice);
  } 

  const removeBookmark =(movieTitle)=>{
    props.removeBookmark(movieTitle)
  }

  let userSearched = props.userSearch;

  useEffect(() => {
    console.log('user searched ' + userSearched) 
  }, [])
  // console.log('user searched ' + userSearched)    

    return (
        <>
          <div className={classes.trendingDiv}>
            <h1 className={classes.trendingDivH1}>Trending</h1>
            <div className={classes.trendingDivContent}>
              <Trending 
                avalibleMovies={avalibleMovies} 
                onBookmark={bookmarkHandler} 
                removeBookmark={removeBookmark}
              />
            </div>
          </div>
          <div className={classes.recommendedDiv}>
            <h1 className={classes.recommendedDivH1}>Recommended for you</h1>
            <Recomended 
              avalibleMovies={avalibleMovies} 
              onBookmark={bookmarkHandler} 
              removeBookmark={removeBookmark}
              />
          </div>
        </>
      );
};
  
export default Home;