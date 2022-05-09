import React from 'react'

import TVChoices from '../Components/Choices/TV/TVChoices';

import avalibleChoices from './../data.json';

const TV = () => {
  return (
    <>
      <div>
        <h1>TV Shows!</h1>
      </div>
      <div>
        <TVChoices avalibleChoices={avalibleChoices}/>
      </div>
    </>
  )
}

export default TV