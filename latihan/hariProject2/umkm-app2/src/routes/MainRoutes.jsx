import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "../component/Layout";
import { Admin } from "../component/Admin";
import { Navbar } from "../component/Navbar";

export const MainRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Layout />} />
            <Route path="home" element={<Layout />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
