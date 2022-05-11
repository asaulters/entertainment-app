import React, {useState} from 'react';
// import {render} from 'react-dom'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import ReactDOM from "react-dom/client";

import Home from './Pages/Home';
import Movies from './Pages/Movies';
import TV from './Pages/TV';
import Bookmarks from './Pages/Bookmarks'

import bookmarkContext from '../src/Components/Store/ContextProvider'
import Header from './Components/Header/Header';
import Search from './Components/Search/Search';
import TrendingChoices from './Choices/Trending/TrendingChoices';
import Recommended from './Choices/Recommended/Recommended';

import classes from './App.module.css';

import avalibleMovies from '../src/data.json'

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
        <Search />
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/movies' element={<Movies />}/>
            <Route path='/tv' element={<TV />}/>
            <Route path='/bookmarks' element={<Bookmarks />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
