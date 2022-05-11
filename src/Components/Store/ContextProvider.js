import React, {useContext, useReducer} from 'react';

const defaultBookmarkState = {
    items: []
};

const bookmarkReducer = (state, action) => {
    if (action.type === 'ADD'){
        const updatedItems = state.items.concat(action.item);
        return { 
            items: updatedItems
        }
    } else if (action.type === "REMOVE") {
        const updatedItems = state.items.filter((items) => items.name !== action.item)
    }
    return defaultBookmarkState;
}

const ContextProvider = () => {
    const [bookmarkState, dispatchBookmarkAction] = useReducer(bookmarkReducer, defaultBookmarkState);

    const addBookmarkHandler = (item) => {
        dispatchBookmarkAction({type: 'ADD', item: item})
    };

    const removeBookmarkHandler = (item) => {
        dispatchBookmarkAction({ type: 'REMOVE', item: item})
    }

    const bookmarkContext = {
        items: bookmarkState,
        addBookmark: addBookmarkHandler,
        removeBookmark: removeBookmarkHandler
    }

  return <bookmarkContext.Provider value={bookmarkContext}>
      {PaymentResponse.children}
  </bookmarkContext.Provider>
};

export default ContextProvider;