import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidenavbar from "../Components/Sidenavbar";

const EditProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [category, setCategory] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProductById = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:5000/products/${id}`
                );
                setName(response.data.name);
                setStock(response.data.stock);
                setCategory(response.data.category)
                setPrice(response.data.price);
            } catch (error) {
                if (error.response) {
                    setMsg(error.response.data.msg);
                }
            }
        };
        getProductById();
    }, [id]);

    const updateProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/products/${id}`, {
                name: name,
                category:category,
                stock:stock,
                price: price,
            });
            navigate("/products");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div className='flex'>
                <Sidenavbar />
                <div className='w-full py-4'>
                    <div className='flex flex-col items-center bg-gray-400 shadow-md shadow-stone-300 rounded-lg w-[70%] m-auto py-2'>
                        <h1 className='text-xl font-bold'>Edit Product</h1>
                        <div className=' w-[80%] py-4 flex justify-between'>
                            <div>
                                <div className='flex flex-col w-48'>
                                    <label htmlFor="">Product Name</label>
                                    <input type="text" className='border ' onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='flex flex-col w-48'>
                                    <label htmlFor="">Category</label>
                                    <input type="text" className='border ' onChange={(e) => setCategory(e.target.value)} />
                                </div>
                                <div className='flex flex-col w-48'>
                                    <label htmlFor="">Stock</label>
                                    <input type="text" className='border ' onChange={(e) => setStock(e.target.value)} />
                                </div>
                                <div className='flex flex-col w-48'>
                                    <label htmlFor="">Price</label>
                                    <input type="text" className='border' onChange={(e) => setPrice(e.target.value)} />
                                </div>
                            </div>
                            <div>
                                <img className='rounded-2xl'
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpA-yg7GuLF6aN3zXVTkYYOFakmYMBeYfdMQ&usqp=CAU" alt="" />
                            </div>

                        </div>
                        <button className='font-bold text-xl bg-orange-400 p-1 rounded-lg hover:bg-black hover:text-white duration-500' onSubmit={updateProduct}>Edit Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
