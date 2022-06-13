
import React, { useEffect } from "react";
import { useGlobalContext } from "../Components/Store/GlobalContext";

import Recomended from '../Components/Choices/Recommended/Recomended';
import Trending from '../Components/Choices/Trending/Trending';

import classes from './Home.module.css';

import avalibleMovies from '../data.json'
  
const Home = (props) => {

  const {state } = useGlobalContext;

  const movieFilter = (movie) => {
    let result = true;
    state.searchTerms.forEach((s) => {
      if(!movie.title.toLowerCase().includes(s)){
        result = false
      }
    });
    return result;
  };



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