import React from "react";

import avalibleChoices from '../data.json'
import MovieChoices from '../Components/Choices/Movies/movieChoices'

const Movies = () => {
  return (
      <>
        <div className="">
            <h1>Movies!</h1>
        </div>
        <div>
          <MovieChoices avalibleChoices={avalibleChoices} />
        </div>
      </>

  );
};
  
export default Movies;