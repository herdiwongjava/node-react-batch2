import axios from "axios";
import { useEffect, useState } from "react";

export const FormInput = () => {
  const [category, setCategory] = useState([]);
  const [movieName, setMovieName] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movieCategory, setMovieCategory] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/cat/view")
      .then((response) => {
        setCategory(response.data.data);
        //    console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log(movieName);
    console.log(movieYear);
    console.log(movieCategory);

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
      } catch (error) {
        console.error("Error:", error);
      }
    };
    postData();
  };

  return (
    <>
      <h1>CRUD Axios</h1>
      <p>Adding movies for new record.</p>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Movie name.."
          value={movieName}
          onChange={handleNameChange}
        />

        <label htmlFor="year">Year</label>
        <input
          type="text"
          id="year"
          name="year"
          placeholder="Movie year.."
          value={movieYear}
          onChange={handleYearChange}
        />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={movieCategory}
          onChange={handleCategoryChange}
        >
          {category.map((cat, index) => (
            <option key={index} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
