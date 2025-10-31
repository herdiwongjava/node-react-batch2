export const Hero = () => {
  return (
    <>
      <div className="bg-amber-100 h-180 w-full pt-20 flex items-center justify-around">
        <div className="h-100 w-500 mx-20 content-center">
          {/* <img src="hero-1.webp" alt="hero_image" /> */}
          <img
            className="absolute top-80 left-30 w-48 rounded-lg shadow-xl hover:-translate-y-2 ease-in-out duration-700"
            src="g3.jpg"
            alt=""
          />
          <img
            className="absolute top-40 left-70 w-48 rounded-lg shadow-xl hover:-translate-y-2 ease-in-out duration-600"
            src="g4.jpeg"
            alt=""
          />
          <img
            className="absolute top-70 left-110 w-48 rounded-lg shadow-xl hover:-translate-y-2 ease-in-out duration-500"
            src="g5.jfif"
            alt=""
          />
          <img
            className="absolute top-23 left-187 w-220 rounded-lg shadow-xl"
            src="g2.jpg"
            alt=""
          />
          <p className=" font-bold w-250 text-2xl ml-150 px-30 pt-20 text-white absolute z-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            obcaecati quis repellendus adipisci! Perferendis optio adipisicing
            elit. Doloribus obcaecati quis repellendus adipisci! Perferendis
            optio
          </p>
        </div>
      </div>
    </>
  );
};
