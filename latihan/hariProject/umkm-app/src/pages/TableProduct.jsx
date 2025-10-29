import axios from "axios";
import { useEffect, useState } from "react";

export const TableProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    await axios.get("http://localhost:3000/api/products").then((response) => {
      setProduct(response.data.data);
    });
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category Id</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.categoryId}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
