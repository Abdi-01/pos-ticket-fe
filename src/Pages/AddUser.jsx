import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidenavbar from '../Components/Sidenavbar'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password:password,
        confirmationpassword:confirmationPassword,
        role: role,
      });
      navigate("/users");
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
<Sidenavbar  />
<div className='w-full py-4'>
    <div className='flex flex-col items-center bg-gray-400 shadow-md shadow-stone-300 rounded-lg w-[70%] m-auto py-2'>
        <h1 className='text-xl font-bold'>Create New User</h1>
    <div className=' w-[80%] py-4 flex justify-between'>
        <div>
        <div className='flex flex-col w-48'>
            <label htmlFor="">Name</label>
            <input type="text" className='border ' onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='flex flex-col w-48'>
            <label htmlFor="">Email</label>
            <input type="text" className='border ' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='flex flex-col w-48'>
            <label htmlFor="">Password</label>
            <input type="text" className='border ' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='flex flex-col w-48'>
            <label htmlFor="">Confirmation Password</label>
            <input type="text" className='border ' onChange={(e) => setConfirmationPassword(e.target.value)} />
        </div>
        <div className='flex flex-col w-48'>
            <label htmlFor="" onChange={(e) => setRole(e.target.value)}>Role</label>
            <select> 
                <option value="">Admin</option>
                <option value="">Cashier</option>
            </select>
        </div>
      
        </div>
        <div>
            <img className='rounded-2xl'
             src="https://cdn.dribbble.com/users/3734064/screenshots/14348087/media/a99ab961c8f8c7d29b5f7136e0b19ca4.png?compress=1&resize=400x300&vertical=top" alt="" />
        </div>

    </div>
    <button className='font-bold text-xl bg-orange-400 p-1 rounded-lg hover:bg-black hover:text-white duration-500' type='submit' onSubmit={saveUser}>Create New User</button>
    </div>
</div>
</div>
</div>
  )
}

export default AddUser