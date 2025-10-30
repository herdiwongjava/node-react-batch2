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
              <a className="hover:text-white" href="">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a className=" text-white hover:text-white font-bold bg-black p-3 rounded-xl" href="">
            🛒Char
          </a>
        </div>
      </nav>
    </>
  );
};
