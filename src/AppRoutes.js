import { Route, Routes } from "react-router-dom";
import BookmarksPage from "./pages/Bookmarks";
import HomePage from "./pages/Home";
// That index is NOT supposed to be necessary
import MoviesPage from "./pages/Movies/index";
import TVPage from "./pages/TV";

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route path="/movies" element={<MoviesPage />} />
    <Route path="/tv" element={<TVPage />} />
    <Route path="/bookmarks" element={<BookmarksPage />} />
  </Routes>
);

export default AppRoutes;
