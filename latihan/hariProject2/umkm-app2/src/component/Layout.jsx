import { useEffect, useState } from "react";
import { CardItem } from "./CardItem";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { NavCategory } from "./NavCategory";
import axios from "axios";

export const Layout = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetcProduct();
  }, []);

  const fetcProduct = async () => {
    await axios.get("http://localhost:3000/api/products").then((response) => {
      setProduct(response.data.data);
    });
  };

  return (
    <>
      <Navbar />
      <Hero />
      <NavCategory />
      <div className="w-full bg-amber-300 p-20 mt-[-30px] pt-[80px] ">
        <CardItem product={product} />
      </div>
      <footer className=" h-13 bg-black items-center flex justify-center">
        <p className="text-white">@2025   |   BPVP Samarinda   |   Kemnaker</p>
      </footer>
    </>
  );
};
