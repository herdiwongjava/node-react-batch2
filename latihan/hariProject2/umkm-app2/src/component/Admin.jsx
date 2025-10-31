import { useContext, useState } from "react";
import { ContextApi } from "../Context/ContextApi";

export const Admin = () => {
  const { product, category, updateProduct, deleteProduct } =
    useContext(ContextApi);
  const [idToEdit, setIdToEdit] = useState(0);
  const [nameToEdit, setNameToEdit] = useState("");
  const [priceToEdit, setPriceToEdit] = useState(0);
  const [descToEdit, setDescToEdit] = useState("");
  const [imgToEdit, setImgToEdit] = useState("");
  const [catToEdit, setCatToEdit] = useState(0);

  const handleEditProduct = (item) => {
    const { id, name, price, description, imageUrl, categoryId } = item;
    setIdToEdit(id);
    setNameToEdit(name);
    setPriceToEdit(price);
    setDescToEdit(description);
    setImgToEdit(imageUrl);
    setCatToEdit(categoryId);
    document.getElementById("my_modal_1").showModal();
  };

  const handleUpdateProduct = () => {
    const dataToSend = {
      id: idToEdit,
      name: nameToEdit,
      price: priceToEdit,
      description: descToEdit,
      imageUrl: imgToEdit,
      categoryId: catToEdit,
    };
    updateProduct(dataToSend);
  };

  return (
    <>
      <div className="bg-amber-300 h-full pt-20">
        <div className="flex justify-center items-center mb-3">
          <div className="flex justify-end w-[50%]">
            {category.map((cat, index) => (
              <div
                key={index}
                className="bg-black text-white w-fit p-2 mx-2 rounded-xl shadow-xl cursor-pointer hover:bg-gray-700"
              >
                {cat.name}
              </div>
            ))}
          </div>

          <div className="w-[50%] flex justify-start mr-20 items-center ">
            <input
              className="bg-white w-100 h-8 rounded-sm pl-1 ml-3"
              type="text"
              placeholder="Search.."
            />
            <button className="bg-black text-white w-20 h-10 p-2 rounded-sm ml-2 cursor-pointer">
              Search
            </button>
            <button className="bg-black text-white w-20 h-10 p-2 mx-2 rounded-sm cursor-pointer">
              Add
            </button>
          </div>
        </div>
        <div className="max-w-300 h-300 p-5 bg-amber-800 m-auto rounded-lg">
          <div className="grid grid-cols-3 gap-8">
            {product.map((item, index) => (
              <div
                key={index}
                className="relative bg-amber-100 w-90 h-15 rounded-xl shadow-lg"
              >
                <button
                  className="cursor-pointer"
                  type="button"
                  onClick={() => handleEditProduct(item)}
                >
                  <div className="bg-amber-100 w-80 h-18 flex items-center justify-between rounded-sm shadow-lg">
                    <div className="flex items-center">
                      <img
                        src={item.imageUrl}
                        alt=""
                        className="w-25 h-21 rounded-sm"
                      />
                      <p className="font-bold ml-5">{item.name}</p>
                    </div>
                    <p className="pr-2 text-red-500">
                      Rp. {item.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                </button>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    deleteProduct(item.id);
                  }}
                  className="relative ml-82 top-[-65px] text-lg hover:text-xl"
                  href=""
                >
                  ❌
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          open modal
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <div className="modal-action">
              <form method="dialog">
                {/* Form input */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 relative right-19">
                  <img className="w-70 h-40 " src={imgToEdit || "/"} alt="" />
                  <input
                    type="file"
                    className="file-input"
                    onChange={(e) => {
                      setImgToEdit(e.target.value);
                      console.log(e.target.files);
                    }}
                  />

                  <label className="label">name</label>
                  <input
                    type="text"
                    value={nameToEdit || ""}
                    className="input"
                    placeholder="name"
                    onChange={(e) => {
                      setNameToEdit(e.target.value);
                    }}
                  />

                  <label className="label">price</label>
                  <input
                    type="text"
                    value={priceToEdit || ""}
                    className="input"
                    placeholder="price"
                    onChange={(e) => {
                      setPriceToEdit(e.target.value);
                    }}
                  />

                  <label className="label">description</label>
                  <textarea
                    className="h-30 border p-1 rounded-sm"
                    placeholder="description"
                    value={descToEdit || ""}
                    onChange={(e) => {
                      setDescToEdit(e.target.value);
                    }}
                  ></textarea>

                  <label className="label">categoryId</label>
                  <select
                    value={catToEdit || ""}
                    onChange={(e) => {
                      setCatToEdit(e.target.value);
                    }}
                  >
                    {category.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>

                  <button
                    className="btn btn-neutral mt-4"
                    onClick={() => handleUpdateProduct()}
                  >
                    Update
                  </button>
                  <button className="btn">Close</button>
                </fieldset>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};
