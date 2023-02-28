import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../reducers/users";


function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logoutBtn = () => {
    dispatch(logoutAction());
    navigate("/");
  };
  return (
    <div>
      <div className='flex justify-between p-4 bg-gray-600'>
        <h1 className='font-bold text-xl text-orange-400'>Tunes Up Festival</h1>
        <button className='bg-orange-400 px-2 rounded-2xl font-bold hover:bg-black hover:text-white' onClick={logoutBtn}>Log Out</button>
      </div>
    </div>
  
  )
}

export default Navbar