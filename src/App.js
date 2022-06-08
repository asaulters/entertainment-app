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
import SearchPage from './Pages/SearchPage';

import Header from './Components/Header/Header';
import Search from './Components/Search/Search';


import classes from './App.module.css';

import avalibleMovies from '../src/data.json'

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [userSearched, setUserSearched] = useState([{}]);
  let resultOfSearch = [];

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

  const searchResults = (searched) => {
    // let resSearch = searched
    setUserSearched([{searched}]);
    rand();
    // console.log(resultOfSearch.prototype.length);
  }

const rand =() => {
  console.log('search route');
  console.log(userSearched);
  console.log(userSearched.length);
}

const rando =() => {
  console.log('home route')
}

  return (
    <Router>
      <div className='App'>
        <Header />
        <Search avalibleMovies={avalibleMovies} searched={searchResults}/>
        <div className='content'>
          <Routes>
            {userSearched.length >1 ? 
              <Route path='/' element={<SearchPage bookmark={bookmarkHandler} removeBookmark={removeBookmarkHandler} userSearch={resultOfSearch} ran={rand()}/> } /> :
              <Route exact path="/" element={<Home bookmark={bookmarkHandler} removeBookmark={removeBookmarkHandler} userSearch={resultOfSearch} />} />
            }


          </Routes>
        </div>
      </div>


    </Router>
  );
}

export default App;
''


{/* <Route exact path="/" element={<Home bookmark={bookmarkHandler} removeBookmark={removeBookmarkHandler} userSearch={resultOfSearch}/>} />
<Route path='/movies' element={<Movies bookmark={bookmarkHandler} />}/>
<Route path='/tv' element={<TV bookmark={bookmarkHandler} removeBookmark={removeBookmarkHandler}/>}/>
<Route path='/bookmarks' element={<Bookmarks bookmarks={bookmarks} removeBookmark={removeBookmarkHandler}/>}/> */}