import axios from "axios";
import { useEffect, useState } from "react";
import { Confirm } from "./Confirm";

export const CRUDCat = ({ fetch, setDataUpdate }) => {
  const [category, setCategory] = useState([]);
  const [viewError, setViewError] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadingFetch = setTimeout(() => {
      fetchCategory();
    }, 500);
    return () => {
      clearTimeout(loadingFetch);
    };
  }, [fetch]);

  const fetchCategory = async () => {
    await axios
      .get("http://localhost:3000/cat/view")
      .then((response) => {
        setCategory(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const deleteCategory = async (id) => {
    await axios
      .delete(`http://localhost:3000/cat/remove/${id}`)
      .then((response) => {
        // console.log("deleted", response.data);
        setViewError(response.data);
        fetchCategory();
      })
      .catch((error) => {
        console.log("Error", error);
        setViewError(error.message);
      });
  };

  const handleDeleteCategory = async (id) => {
    if (confirm("Yakin Hapus Data ini ?")) {
      deleteCategory(id);
    }
  };

  const [idGet, setIdGet] = useState(null);
  const handleConfirm = async (id) => {
    setIdGet(id);
    // deleteCategory(id);
  };

  const handleUpdateCategory = (id, name) => {
    const dataToUpdate = {
      id,
      name,
    };
    setDataUpdate(dataToUpdate);
  };

  const itemsPerPage = 10;
  const totalPages = Math.ceil(category.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = category.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    currentPage < totalPages && setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div>
        <h2 className="text-center font-bold text-xl mb-5">Category List</h2>

        <p>
          {viewError.status === "unsuccess"
            ? `Info : ${viewError.message}`
            : viewError.status === "succes" && `Info ; ${viewError.message}`}
        </p>
        <div className="container_table h-120 overflow-x-auto">
          <table className="table w-lg">
            <thead className="sticky top-0">
              <tr className="bg-accent">
                <th>No</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((cat, index) => (
                <tr
                  key={indexOfFirstItem + index}
                  className="hover:bg-base-300"
                >
                  <td>{indexOfFirstItem + index + 1}</td>
                  <td>{cat.name}</td>
                  <td>
                    <button
                      className="btn_edit btn btn-accent mr-2"
                      onClick={() => handleUpdateCategory(cat.id, cat.name)}
                    >
                      Edit
                    </button>
                    {/* <button
                      className="btn_delete btn btn-error"
                      onClick={() => handleDeleteCategory(cat.id)}
                    >
                      Delete
                    </button> */}
                    <label
                      htmlFor="my_modal_6"
                      className="btn_delete btn btn-error"
                      onClick={() => handleConfirm(cat.id)}
                    >
                      Delete
                    </label>
                    <Confirm idGet={idGet} action={deleteCategory} text="delete"/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="join">
          <button
            className="join-item btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            «
          </button>

          <button className="join-item btn no-animation cursor-default">
            Page {currentPage} of {totalPages}
          </button>

          <button
            className="join-item btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            »
          </button>
        </div>
      </div>
    </>
  );
};
