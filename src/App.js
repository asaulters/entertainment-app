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

  const [bookmarks, setBookmarks] = useState([]);

  const bookmarkHandler =(newBookmark) =>{
    let bkmrkTitleCheck = bookmarks.filter(bookmark => bookmark.title === newBookmark.title);
    if(bkmrkTitleCheck.length < 1) {
      setBookmarks([...bookmarks, newBookmark]);
      console.log(bookmarks);
    } else if(bkmrkTitleCheck.length>0){
      setBookmarks(bookmarks.filter((movie) => movie.title !== newBookmark))
      console.log(bookmarks)
    }

  }

  const removeBookmarkHandler = (movieName) => {
    setBookmarks(bookmarks.filter((movie) => movie.title != movieName))

  }

  return (
    <Router>
      <div className='App'>
        <Header />
        <Search />
        <div className='content'>
          <Routes>
            <Route exact path="/" element={<Home bookmark={bookmarkHandler} removeBookmark={removeBookmarkHandler}/>} />
            <Route path='/movies' element={<Movies bookmark={bookmarkHandler} />}/>
            <Route path='/tv' element={<TV bookmark={bookmarkHandler} removeBookmark={removeBookmarkHandler}/>}/>
            <Route path='/bookmarks' element={<Bookmarks bookmarks={bookmarks} removeBookmark={removeBookmarkHandler}/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
