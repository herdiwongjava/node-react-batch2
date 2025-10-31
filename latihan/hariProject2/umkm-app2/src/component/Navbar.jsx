import { Link, Outlet } from "react-router";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-[#FF9A00] text text-[4F200D] flex item-center justify-between px-5 py-5 w-full fixed top-0 left-0 z-2 sh">
        <div>
          <a className="text-lg font-bold" href="">
            UMKM-Minum 🍺
          </a>
        </div>
        <div className="content-center">
          <ul className="flex space-x-10 text-[18px] font-bold">
            <li>
              <Link className="hover:text-white" to="/home">
                Home
              </Link>
            </li>
            <li>
              <input type="checkbox" id="toggle" className="hidden peer" />
              <label
                htmlFor="toggle"
                className="cursor-pointer hover:text-white"
              >
                What
                <span className="ml-3 peer-checked:rotate-180 transition-transform">
                  ▼
                </span>
              </label>
              <ul className="absolute bg-gray-50 p-3 rounded-md shadow-lg opacity-0   peer-checked:opacity-100">
                <li className="cursor-pointer hover:text-[#FF9A00] m-2">
                  <a>About</a>
                </li>
                <li className="cursor-pointer hover:text-[#FF9A00] m-2">
                  <Link to="/admin">Admin</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <a
            className=" text-white hover:text-white font-bold bg-black p-3 rounded-xl"
            href=""
          >
            🛒Char
          </a>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
