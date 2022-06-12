import { createContext, useContext, useReducer } from "react";

import avalibleMovies from '../../data.json'

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const initialState = {
  movies: [avalibleMovies],
  searchTerms: [],
  bookmarks: [],
};



const reducer = (state, action) => {
  switch (action.type) {
    case "loadMovies":
      return { ...state, movies: action.payload };
    case "addSearchTerm":
      return { ...state, searchTerms: [...state.searchTerms, action.payload] };
    case "removeSearchTerm":
      return {
        ...state,
        searchTerms: state.searchTerms.filter((s) => s !== action.payload)
      };
    case "loadBookmarks":
        return{...state, bookmarks: action.payload};
    case "addBookmark":
        return {...state, bookmarks: [...state.bookmarks, action.payload] };
    case "removeBookmarks":
        return {
            ...state,
             bookmarks: state.bookmarks.filter((s) => s !== action.payload)
             };
    default:
      return state;
  }
};



const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

















// import { createContext, useContext, useReducer } from 'react';

// const GlobalContext = createContext;

// export const useGlobalContext = () => useContext(GlobalContext);

// const initialState = {
//     movies: [],
//     searchTerms : []
// };

// const reducer = (state, action) => {
//     switch(action.type) {
//         case "loadingMovies":
//             return {...state, movies: action.payload};
//         case "addSearchTerms":
//             return{ ...state, searchTerms: [...state.searchTerms, action.payload] };
//         case " removeSearchTerms":
//             return {
//                 ...state,
//                 searchTerms: state.searchTerms.filter ((s) => s !== action.payload)
//             }
//     }
// }

// const GlobalContextProvider = ({children}) => {
//     const [state, dispatch] = useReducer(reducer, initialState);
//     return (
//         <GlobalContext.Provider value={{ state, dispatch}} >
//             {children}
//         </GlobalContext.Provider>
//     )
// }




