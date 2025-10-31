import { CardItem } from "./CardItem";
import { Hero } from "./Hero";
import { NavCategory } from "./NavCategory";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <Hero />
      <NavCategory />
      <div className="w-full bg-amber-300 p-20 mt-[-30px] pt-20 ">
        <CardItem  />
      </div>
      <Footer />
    </>
  );
};
