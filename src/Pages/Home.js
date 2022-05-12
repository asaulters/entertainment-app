
import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";

import TrendingChoices from '../Choices/Trending/TrendingChoices';
import Recommended from '../Choices/Recommended/Recommended';

import classes from './Home.module.css';

import BkmrkCtx from '../Components/Store/ContextProvider'
import avalibleMovies from '../data.json'
  
const Home = (props) => {

  const bookmarkHandler= (newChoice)=> {
    // props.bookmarkHandler(newChoice)
    // console.log(newChoice);
    props.bookmark(newChoice);
  } 
    return (
        <>
          <div className={classes.trendingDiv}>
            <h1 className={classes.trendingDivH1}>Trending</h1>
            <div className={classes.trendingDivContent}>
              <TrendingChoices />
            </div>
          </div>
          <div className={classes.recommendedDiv}>
            <h1 className={classes.recommendedDivH1}>Recommended for you</h1>
            <Recommended avalibleMovies={avalibleMovies} onBookmark={bookmarkHandler}/>
          </div>
        </>
      );
};
  
export default Home;