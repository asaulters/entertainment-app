import { Route, Routes } from "react-router-dom";
import BookmarksPage from "./Pages/Bookmarks";
import HomePage from "./Pages/Home";
import MoviesPage from "./Pages/Movies";
import TVPage from "./Pages/TV";

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={<HomePage />} />
    <Route path="/movies" element={<MoviesPage />} />
    <Route path="/tv" element={<TVPage />} />
    <Route path="/bookmarks" element={<BookmarksPage />} />
  </Routes>
);

export default AppRoutes;
