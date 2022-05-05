import React from 'react';

import Header from './Header/Header';
import Search from './Search/Search';
import TrendingChoices from './Choices/Trending/TrendingChoices';
import Recommended from './Choices/Recommended/Recommended';

import classes from './App.module.css';

import avalibleMovies from '../src/data.json'

function App() {
  return (
    <>
      <Header />;
      <Search />;
      <div className={classes.trendingDiv}>
        <h1 className={classes.trendingDivH1}>Trending</h1>
        <div className={classes.trendingDivContent}>
          <TrendingChoices />
        </div>
      </div>
      <div className={classes.recommendedDiv}>
        <h1 className={classes.recommendedDivH1}>Recommended for you</h1>
        <Recommended avalibleMovies={avalibleMovies}/>
      </div>
    </>
  );
}

export default App;
