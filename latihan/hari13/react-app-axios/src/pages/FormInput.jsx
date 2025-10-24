import axios from "axios";
import { useEffect, useState } from "react";

export const FormInput = ({ setFetch, fetch, dataUpdate, setDataUpdate }) => {
  const [category, setCategory] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movieCategory, setMovieCategory] = useState("");
  const [viewError, setViewError] = useState({});

  useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    await axios
      .get("http://localhost:3000/cat/view")
      .then((response) => {
        setCategory(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    const { title, year, categoryId } = dataUpdate;
    setMovieName(title);
    setMovieYear(year);
    setMovieCategory(categoryId);
  }, [dataUpdate]);

  const updateMovie = async () => {
    const { id } = dataUpdate;
    const dataToSend = {
      title: movieName,
      year: Number(movieYear),
      categoryId: Number(movieCategory),
    };
    try {
      const response = await axios.put(
        `http://localhost:3000/movie/change/${id}`,
        dataToSend
      );
      await setFetch(!fetch);
      setViewError(response.data);
      console.log("Updated", response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleUpdateMovie = (e) => {
    e.preventDefault();
    if (confirm("Yakin Ubah Data ini ?")) {
      updateMovie();
      setMovieName("");
      setMovieYear("");
      setMovieCategory(0);
      setDataUpdate({});
    }
  };

  const handleNameChange = (e) => {
    setMovieName(e.target.value);
  };

  const handleYearChange = (e) => {
    setMovieYear(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setMovieCategory(e.target.value);
  };

  const handleSubmitMovie = async (e) => {
    e.preventDefault();
    const postData = async () => {
      const dataToSend = {
        title: movieName,
        year: Number(movieYear),
        categoryId: Number(movieCategory),
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/movie/add",
          dataToSend
        );
        console.log("Success:", response.data);
        setViewError(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    postData();
    setMovieName("");
    setMovieYear("");
    setMovieCategory(0);
    await setFetch(!fetch);
  };

  return (
    <div>
      <h1 className="text-center font-bold text-xl">CRUD Axios</h1>
      <p className="text-center font-bold text-sm">
        Adding movies for new record.
      </p>

      <form
        action=""
        onSubmit={!dataUpdate.title ? handleSubmitMovie : handleUpdateMovie}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <label className="label" htmlFor="title">
          Title
        </label>
        <input
          className="input"
          type="text"
          id="title"
          name="title"
          placeholder="Movie name.."
          value={movieName || ""}
          onChange={handleNameChange}
        />

        <label className="label" htmlFor="year">
          Year
        </label>
        <input
          className="input"
          type="number"
          id="year"
          name="year"
          placeholder="Movie year.."
          value={movieYear || ""}
          onChange={handleYearChange}
        />

        <label className="label" htmlFor="category">
          Category
        </label>
        <select
          className="select"
          id="category"
          name="category"
          value={movieCategory || ""}
          onChange={handleCategoryChange}
        >
          <option value="0">--Select Category--</option>
          {category.map((cat, index) => (
            <option key={index} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        {!dataUpdate.title ? (
          <input type="submit" value="Submit" className="btn btn-accent" />
        ) : (
          <>
            <input type="submit" value="Update " className="btn btn-success" />
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
        {/* <input type="submit" value={!dataUpdate.title ? "Submit" : "Update "} /> */}
      </form>
      <p>
        {viewError.status === "unsuccess"
          ? `Info : ${viewError.message}`
          : viewError.status === "succes" && `Info: ${viewError.message}`}
      </p>
    </div>
  );
};
