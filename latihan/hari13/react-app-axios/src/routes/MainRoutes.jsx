import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router";
import { MianLayout } from "../layout/MainLayout";
import { Movie } from "../pages/Movie";
import { Category } from "../pages/Category";
import { Home } from "../pages/Home";

export default function MainRoutes() {
  return (
    <div className="mt-20 mb-50 text-center w-4xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MianLayout />}>
            <Route index element={<Home />} />
            <Route path="movie" element={<Movie />} />
            <Route path="dashboard" element={<Category />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}





function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
