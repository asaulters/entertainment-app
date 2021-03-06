import { Link } from "react-router-dom";
import { useGlobalContext } from "../Store/GlobalContext";
import CurrentSearchTerms from "./CurrentSearchTerms";
// import "./layout.css";
import classes from './Layout.module.css'
import avatarIMG from '../../assets/image-avatar.png'
import logoImg from '../../assets/logo.svg';
import homeImg from '../../assets/squares.svg.svg'

const Layout = ({ children }) => {
  const { dispatch } = useGlobalContext();

  const handleSearch = (e) => {
    e.preventDefault();
    const inputField = e.target.children[0];
    const payload = inputField.value.toLowerCase();
    dispatch({ type: "addSearchTerm", payload });
    inputField.value = "";
  };


  return (
    <>
      <header>
        <Link to="/" className={classes.logo}>
          {/* <h1 style={{ margin: 0 }}>My Site</h1> */}
          <img src={logoImg} alt="logo img"/>
        </Link>
        <div id="header-content">
          <nav className={classes.navLinks}>
          <Link to="/" >
              <img
                src={homeImg}
                alt="home img"
                style={{ height: "1.5rem", paddingRight: '10px', fill: 'black'}}
              />
            </Link>  
            <Link to="/movies" >
              <img
                src="https://www.svgrepo.com/show/360602/movie.svg"
                alt="Movies"
                style={{ height: "2rem", }}
              />
            </Link>
            <Link to="/tv" >
              <img
                src="https://www.svgrepo.com/show/370880/tv.svg"
                alt="TV"
                style={{ height: "3.5rem", marginTop: "-8px" }}
              />
            </Link>
            <Link to="/bookmarks" >
              <img
                src="https://www.svgrepo.com/show/135489/bookmark-outline.svg"
                alt="Bookmarks"
                style={{ height: "1.5rem" }}
              />
            </Link>
            <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
           </div>
          </nav>
        </div>
        <div className="profileAvatar">
              <img 
                src={avatarIMG}
                alt="avatar"
                style={{ height: "3rem" }}
              />
            </div>
      </header>
      <form onSubmit={handleSearch} className={classes.searchForm}>
            <input className={classes.searchFormInput}
              type="text"
              placeholder="Search for movies or TV series"

            />
          </form>
      <CurrentSearchTerms />
      <main>{children}</main>
    </>
  );
};

export default Layout;
