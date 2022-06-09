import React, {useState} from 'react';

import AppRoutes from './AppRoutes';
import Layout from './Components/Layout'

import Header from './Components/Header/Header';
import Search from './Components/Search/Search';


import classes from './App.module.css';

import avalibleMovies from '../src/data.json'

function App() {

//   const [bookmarks, setBookmarks] = useState([]);
//   const [userSearched, setUserSearched] = useState([{}]);
//   let resultOfSearch = [];

//   const bookmarkHandler =(newBookmark) =>{
//     let bkmrkTitleCheck = bookmarks.filter(bookmark => bookmark.title === newBookmark.title);
//     if(bkmrkTitleCheck.length < 1) {
//       setBookmarks([...bookmarks, newBookmark]);
//       console.log(bookmarks);
//     } else if(bkmrkTitleCheck.length>0){
//       setBookmarks(bookmarks.filter((movie) => movie.title !== newBookmark))
//       console.log(bookmarks)
//     }

//   }

//   const removeBookmarkHandler = (movieName) => {
//     setBookmarks(bookmarks.filter((movie) => movie.title != movieName))

//   }

//   const searchResults = (searched) => {
//     // let resSearch = searched
//     setUserSearched([{searched}]);
//     rand();
//     // console.log(resultOfSearch.prototype.length);
//   }

// const rand =() => {
//   console.log('search route');
//   console.log(userSearched);
//   console.log(userSearched.length);
// }

// const rando =() => {
//   console.log('home route')
// }

  return (
    
      <div className='App'>
        <Layout >
        <div className='content'>
          <AppRoutes />
        </div>
        </Layout>
      </div>


    
  );
};

export default App;



{/* <Route exact path="/" element={<Home bookmark={bookmarkHandler} removeBookmark={removeBookmarkHandler} userSearch={resultOfSearch}/>} />
<Route path='/movies' element={<Movies bookmark={bookmarkHandler} />}/>
<Route path='/tv' element={<TV bookmark={bookmarkHandler} removeBookmark={removeBookmarkHandler}/>}/>
<Route path='/bookmarks' element={<Bookmarks bookmarks={bookmarks} removeBookmark={removeBookmarkHandler}/>}/> */}