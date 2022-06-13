import React, {useEffect} from 'react';

import AppRoutes from './AppRoutes';
import Layout from './Components/Layout'
import {useGlobalContext} from './Components/Store/GlobalContext'

function App() {
  const { dispatch } = useGlobalContext();
  // useEffect(() => {
  //   fetch('data.json')
  //     .then((data) => data.json())
  //     .then((payload) => dispatch({type: 'loadMovies', payload}))
  // }, [])


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
