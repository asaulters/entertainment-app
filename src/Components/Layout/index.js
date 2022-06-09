import { Link } from "react-router-dom";
import { useGlobalContext } from "../Store/GlobalContext";
import CurrentSearchTerms from "./CurrentSearchTerms";
import "./layout.css";

const Layout = ({ children }) => {
  const { dispatch } = useGlobalContext();

  const handleSearch = (e) => {
    e.preventDefault();
    const inputField = e.target.children[0];
    const payload = inputField.value;
    dispatch({ type: "addSearchTerm", payload });
    inputField.value = "";
  };

  return (
    <>
      <header>
        <Link to="/">
          <h1 style={{ margin: 0 }}>My Site</h1>
        </Link>
        <div id="header-content">
          <nav>
            <Link to="/movies">
              <img
                src="https://www.svgrepo.com/show/360602/movie.svg"
                alt="Movies"
                style={{ height: "2rem" }}
              />
            </Link>
            <Link to="/tv">
              <img
                src="https://www.svgrepo.com/show/370880/tv.svg"
                alt="TV"
                style={{ height: "3.5rem", marginTop: "-10px" }}
              />
            </Link>
            <Link to="/bookmarks">
              <img
                src="https://www.svgrepo.com/show/135489/bookmark-outline.svg"
                alt="Bookmarks"
                style={{ height: "1.5rem" }}
              />
            </Link>
          </nav>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              style={{ padding: "0.75rem" }}
            />
          </form>
        </div>
      </header>
      <CurrentSearchTerms />
      <main>{children}</main>
    </>
  );
};

export default Layout;
