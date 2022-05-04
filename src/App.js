import React from 'react';

import Header from './Header/Header';
import Search from './Search/Search';
import TrendingChoices from './Choices/Trending/TrendingChoices';
import Recommended from './Choices/Recommended/Recommended';

// import './App.css';

import avalibleMovies from '../src/data.json'

function App() {
  return (
    <>
      <Header />;
      <Search />;
      <div className='trendingDiv'>
        <h1 className='trendingDiv-h1'>Trending</h1>
        <div className='trendingDiv-Content'>
          <TrendingChoices />
        </div>
      </div>
      <div className='recommendedDiv'>
        <h1>Recommended for you</h1>
        <Recommended avalibleMovies={avalibleMovies}/>
      </div>
    </>
  );
}

export default App;
