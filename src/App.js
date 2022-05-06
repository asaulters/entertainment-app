import React, {useState} from 'react';
// import {render} from 'react-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

import Home from './Pages/Home'
import Movies from './Pages/Movies'

import Header from './Header/Header';
import Search from './Search/Search';
import TrendingChoices from './Choices/Trending/TrendingChoices';
import Recommended from './Choices/Recommended/Recommended';

import classes from './App.module.css';

import avalibleMovies from '../src/data.json'

function App() {
  const [page, setPage] = useState('recommended');

  const movieClickHandler =() => {
        
  }

  // return (
  //   <>
      {/* <Header />
      <Search />
      <div className={classes.trendingDiv}>
        <h1 className={classes.trendingDivH1}>Trending</h1>
        <div className={classes.trendingDivContent}>
          <TrendingChoices />
        </div>
      </div>
      <div className={classes.recommendedDiv}>
        <h1 className={classes.recommendedDivH1}>Recommended for you</h1>
        <Recommended avalibleMovies={avalibleMovies}/>
      </div> */}
      {/* <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  ); */}
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='content'>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
