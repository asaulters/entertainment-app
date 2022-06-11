import React from 'react';

import AppRoutes from './AppRoutes';
import Layout from './Components/Layout'

function App() {

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
