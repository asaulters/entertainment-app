import { useGlobalContext } from "../Store/GlobalContext";

import classes from './Layout.module.css'

const CurrentSearchTerms = () => {
  const { state, dispatch } = useGlobalContext();
  return (
    <div id="searchTerms">
      {state.searchTerms.map((s) => (
        <div id='searchTermOption' className={classes.searchTermOption}>
          {s}
          <img
            onClick={() => dispatch({ type: "removeSearchTerm", payload: s })}
            style={{
              filter: "none",
              height: "0.75rem",
              marginLeft: "1rem",
              cursor: "pointer"
            }}
            src="https://www.svgrepo.com/show/12848/x-symbol.svg"
            alt="Remove"
          />
        </div>
      ))}
    </div>
  );
};

export default CurrentSearchTerms;

{/* <div className={classes.searchTermOption}> */}