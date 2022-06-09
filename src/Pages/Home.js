
import React, { useEffect } from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";


import Recomended from '../Components/Choices/Recommended/Recomended';
import Trending from '../Components/Choices/Trending/Trending';

import classes from './Home.module.css';

import avalibleMovies from '../data.json'
  
const Home = (props) => {


    return (
        <>
          <div className={classes.trendingDiv}>
            <h1 className={classes.trendingDivH1}>Trending</h1>
            <div className={classes.trendingDivContent}>
              <Trending 
                avalibleMovies={avalibleMovies} 
              />
            </div>
          </div>
          <div className={classes.recommendedDiv}>
            <h1 className={classes.recommendedDivH1}>Recommended for you</h1>
            <Recomended 
              avalibleMovies={avalibleMovies} 
              />
          </div>
        </>
      );
};
  
export default Home;