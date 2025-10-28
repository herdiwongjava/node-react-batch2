import axios from "axios";
import { useEffect, useState } from "react";
import { Confirm } from "./Confirm";

export const CRUDAxios = ({ fetch, setDataUpdate }) => {
  const [movies, setMovies] = useState([]);
  const [viewError, setViewError] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadingFetch = setTimeout(() => {
      fetchMovie();
    }, 500);

    return () => {
      clearTimeout(loadingFetch);
    };
  }, [fetch]);

  const fetchMovie = async () => {
    await axios
      .get("http://localhost:3000/movie/view")
      .then((response) => {
        setMovies(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const deleteMovie = async (id) => {
    await axios
      .delete(`http://localhost:3000/movie/remove/${id}`)
      .then((response) => {
        console.log("deleted", response.data);
        setViewError(response.data);
        fetchMovie();
      })
      .catch((error) => {
        console.log("Error", error);
        setViewError(error.message);
      });
  };

  const handleDeleteMovie = (id) => {
    if (confirm("Yakin Hapus Data ini ?")) {
      deleteMovie(id);
      fetchMovie();
    }
  };

  const [idGet, setIdGet] = useState(null);
  const handleConfirm = async (id) => {
    setIdGet(id);
    // deleteCategory(id);
  };

  const handleUpdateMovie = (id, title, year, categoryId) => {
    const dataToUpdate = {
      id,
      title,
      year,
      categoryId,
    };
    setDataUpdate(dataToUpdate);
  };

  const itemPerPage = 10;
  const totalPage = Math.ceil(movies.length / itemPerPage);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);

  const handlerPrevPage = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };

  const habdlerNextpage = () => {
    currentPage < totalPage && setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <h2 className="text-center font-bold text-xl mb-5">Movie List</h2>
      <p>
        {viewError.status === "unsuccess"
          ? `Info : ${viewError.message}`
          : viewError.status === "succes" && `Info ; ${viewError.message}`}
      </p>
      <div className="container_table h-120 overflow-x-auto">
        <table className="table">
          <thead className="sticky top-0">
            <tr className="bg-accent">
              <th>No</th>
              <th>Movie</th>
              <th>Year</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((movie, index) => (
              <tr key={indexOfFirstItem + index} className="hover:bg-base-300">
                <td>{indexOfFirstItem + index + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.category?.name || "-"}</td>
                <td>
                  <button
                    className="btn_edit btn btn-accent mr-2"
                    onClick={() =>
                      handleUpdateMovie(
                        movie.id,
                        movie.title,
                        movie.year,
                        movie.categoryId
                      )
                    }
                  >
                    Edit
                  </button>
                  {/* <button
                    className="btn_delete btn btn-error"
                    onClick={() => handleDeleteMovie(movie.id)}
                  >
                    Delete
                  </button> */}
                  <label
                    htmlFor="my_modal_6"
                    className="btn_delete btn btn-error"
                    onClick={() => handleConfirm(movie.id)}
                  >
                    Delete
                  </label>
                  <Confirm
                    idGet={idGet}
                    action={deleteMovie}
                    text="delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="join">
        <button
          className="join-item btn"
          onClick={() => handlerPrevPage()}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button className="join-item btn">
          Page {currentPage} of {totalPage}
        </button>
        <button
          className="join-item btn"
          onClick={() => habdlerNextpage()}
          disabled={currentPage === totalPage}
        >
          »
        </button>
      </div>
    </div>
  );
};
