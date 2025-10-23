import axios from "axios";
import { useEffect, useState } from "react";

export const CRUDAxios = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchData();
  },);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/movie/view")
      .then((response) => {
        // console.log(response.data);
        setMovies(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      },);
  };

  return (
    <>
      <h2>Movie List</h2>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Movie</th>
            <th>Year</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.category?.name || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
