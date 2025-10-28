import { Link, Outlet } from "react-router";

export const MianLayout = () => {
  return (
    <>
      <div className="navbar w-4xl bg-base-100 shadow-sm fixed top-0 z-1 ">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl ">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movie">Movie</Link>
            </li>
            <li>
              <Link to="/dashboard">Category</Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};
