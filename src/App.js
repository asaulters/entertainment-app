import React from 'react';

import Header from './Header/Header';
import Search from './Search/Search';
import TrendingChoices from './Choices/Trending/TrendingChoices';
import './App.css';

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
    </>
  );
}

export default App;
