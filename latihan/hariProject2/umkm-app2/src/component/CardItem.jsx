import { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";

export const CardItem = () => {
  const { product} = useContext(ContextApi);
  return (
    <>
      <div className="grid grid-cols-4 gap-6">
        {product.map((item, index) => (
          <div
            key={index}
            className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
          >
            <img
              src={item.imageUrl}
              alt=""
              className="w-full h-48 object-fill hover:scale-110 ease-in-out duration-700"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 text-sm mb-3 flex-grow">
                {item.description}
              </p>
              <p className="text-orange-600 font-bold mt-auto">
                Rp. {item.price.toLocaleString("id-ID")}
              </p>
              <a
                className="bg-[#4F200D] p-1 w-15 rounded-sm text-white mt-2 text-center hover:bg-amber-700 text-sm"
                href=""
              >
                Add
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
