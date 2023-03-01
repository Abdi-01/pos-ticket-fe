import Sidenavbar from '../Components/Sidenavbar'
import Navbar from '../Components/Navbar'
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminProduct() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/products/${productId}`);
    getProducts();
  };

  return (
    <div>
        <Navbar />
        <div className='flex'>
        <Sidenavbar />
        <div className='border-4 border-blue-400 w-full py-4'>
            <div>
                <div className='flex justify-between px-4'>
                    <div className='flex gap-6'>
                    <h1>Sort by</h1>
                    <div class="box">
  <select className='border '>
    <option>Feature</option>
    <option>Best Selling</option>
    <option>Alphabetically, A-Z</option>
    <option>Alphabetically, Z-A</option>
    <option>Category, Tickets </option>
    <option>Category, Merchandise </option>
    <option>Price, Low to High </option>
    <option>Price, High to Low </option>
  </select>
</div>
</div>

                <div className='flex justify-center gap-10 pb-2 '>
                    <button className='bg-orange-400 p-2 rounded-2xl font-bold hover:bg-black hover:text-white duration-500'><Link to='/AddProduct'>Add Product</Link></button>
                    <button className='bg-orange-400 p-2 rounded-2xl font-bold hover:bg-black hover:text-white duration-500'><Link to='/EditProduct'>Edit Product</Link></button>
                    <button className='bg-orange-400 p-2 rounded-2xl font-bold hover:bg-black hover:text-white duration-500'>Delete Product</button>
                </div>
            </div>
            </div>
            <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">List of Products</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.user.name}</td>
              <td>
                <Link
                  to={`/products/edit/${product.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteProduct(product.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            </div>
        </div>
        <div></div>
        </div>
  )
}

export default AdminProduct