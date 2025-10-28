import axios from "axios";
import { useEffect, useState } from "react";

export const FormInputCat = ({ setFetch, fetch, dataUpdate, setDataUpdate }) => {
  const [categoryName, setCategoryName] = useState("");
  const [viewError, setViewError] = useState({});


  useEffect(() => {
    const { name } = dataUpdate;
    setCategoryName(name);
    setViewError({});
  }, [dataUpdate]);

  const updateCategory = async () => {
    const { id } = dataUpdate;
    const dataToSend = {
      name: categoryName,
    };
    try {
      const response = await axios.put(
        `http://localhost:3000/cat/change/${id}`,
        dataToSend
      );
      await setFetch(!fetch);
      setViewError(response.data);
      console.log("Updated", response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    if (confirm("Yakin Ubah Data ini ?")) {
      updateCategory();
      setCategoryName("");
      setDataUpdate({});
    }
  };

  const handleNameChange = (e) => {
    setCategoryName(e.target.value);
    setViewError({});
  };

  const handleSubmitCategory = async (e) => {
    e.preventDefault();
    const postData = async () => {
      const dataToSend = {
        name: categoryName,
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/cat/add",
          dataToSend
        );
        console.log("Success:", response.data);
        setViewError(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    postData();
    setCategoryName("");
    await setFetch(!fetch);
  };

  return (
    <>
      <div>
        <h1 className="text-center text-xl">CRUD Axios</h1>
        <p className="text-center font-bold text-sm mb-5">
          Adding category for new record.
        </p>

        <form
          action=""
          onSubmit={!dataUpdate.id ? handleSubmitCategory : handleUpdateCategory}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <label className="label" htmlFor="title">
            {!dataUpdate.id ?"Name" : "Edit Name"}
          </label>
          <input
            className="input"
            type="text"
            id="title"
            name="title"
            placeholder="Category name.."
            value={categoryName || ""}
            onChange={handleNameChange}
          />

          {!dataUpdate.id ? (
            <input
              type="submit"
              value="Submit"
              className="btn btn-accent mt-5"
            />
          ) : (
            <>
              <input
                type="submit"
                value="Update "
                className="btn btn-success mt-5"
              />
              <button
                className="btn_cancle btn btn-secondary"
                onClick={() => {
                  setDataUpdate({});
                }}
              >
                Cancel
              </button>
            </>
          )}
        </form>
        <p>
          {viewError.status === "unsuccess"
            ? `Info : ${viewError.message}`
            : viewError.status === "succes" && `Info: ${viewError.message}`}
        </p>
      </div>
    </>
  );
};
