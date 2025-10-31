import { useEffect, useState } from "react";
import { ContextApi } from "./Context/ContextApi";
import { MainRoutes } from "./routes/MainRoutes";
import "./tailwind.css";
import axios from "axios";

function App() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetcProduct();
    fetchCategory();
  }, [refresh]);

  const fetcProduct = async () => {
    await axios.get("http://localhost:3000/api/products").then((response) => {
      setProduct(response.data.data);
    });
  };

  const fetchCategory = async () => {
    await axios.get("http://localhost:3000/api/category").then((response) => {
      setCategory(response.data.data);
    });
  };

  const updateProduct = async (data) => {
    const { id, name, price, description, imageUrl, categoryId } = data;

    const dataToSend = {
      name,
      price,
      description,
      imageUrl,
      categoryId,
    };

    console.log(data);

    await axios
      .put(`http://localhost:3000/api/products/${id}`, dataToSend)
      .then((response) => {
        console.log(response.data);
      });

    setRefresh(!refresh);
  };

  const deleteProduct = async (id) => {
    await axios
      .delete(`http://localhost:3000/api/products/${id}`)
      .then((response) => {
        console.log(response.data);
      });
    setRefresh(!refresh);
  };

  return (
    <>
      <ContextApi.Provider
        value={{ product, category, deleteProduct, updateProduct }}
      >
        {/* <Layout /> */}
        <MainRoutes />
      </ContextApi.Provider>
    </>
  );
}

export default App;
