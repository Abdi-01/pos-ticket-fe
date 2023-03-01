import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginAction } from '../reducers/users';
import axios from 'axios';
import { API_URL } from '../helper';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'


function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [visible, setVisible] = React.useState('password');

    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const Visible = () => {
        if (visible == 'password') {
            setVisible('text');
        } else {
            setVisible('password');
        }
    }

    const onBtnLogin = async () => {
        try {
            if (username == '' || password == '') {
                alert('Fill in all form')
            } else {
                let response = await axios.post(`${API_URL}/auth/`, {
                    email: email,
                    password: password
                });

                if (response.data.length == 0) {
                    alert('Account not found')
                } else {
                    alert('Login Success');
                    localStorage.setItem('login', response.data.token);
                    dispatch(loginAction(response.data))
                    navigate('/Dashboard', {replace: true})
                }
            }
        } catch (error) {
            console.log("Error :", error);
            alert(error.response.data.message);
        }
    }
  return (
    <div className='bg-black h-screen'>
        <div className='flex justify-center pt-24'>
            <img className='w-[350px] rounded-tl-2xl rounded-bl-2xl shadow-md shadow-gray-300' src="https://wallpaper.dog/large/20391045.jpg" alt="" />
        <form className="form w-1/3 flex flex-col gap-[10px] px-[2em] pb-14 bg-slate-800 rounded-tr-2xl rounded-br-2xl shadow-md shadow-gray-300 ">
    <p className="heading1 text-center m-[2em] text-xl text-white"><Link to ='/Dashboard'>Login</Link></p>
    <div className="field flex items center justify-center gap-[0.5em] rounded-3xl p-[0.6em] border-none outline-none text-white bg-[#171717]">
    <svg className="input-icon h-[1.3em] w-[1.3em] fill-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
    </svg>
      <input autocomplete="off" placeholder="Email" className="input-field border-none outline-none w-full text-[#d3d3d3] bg-transparent" type="Email" onChange={(e) => setEmail(e.target.value)} />
    </div>
    
    <div className="field flex items center justify-center gap-[0.5em] rounded-3xl p-[0.6em] border-none outline-none text-white bg-[#171717]">
    <button onClick={Visible}>
                        {
                            visible == 'password' ?
                            <AiFillEye />
                            :
                            <AiFillEyeInvisible />
                        }
                    </button>
      <input placeholder="Password" className="input-field border-none outline-none w-full text-[#d3d3d3] bg-transparent" type="password" onChange={(e) => setPassword(e.target.value)}  />
    </div>

    <div className="btn flex justify-center flex-row mt-[2.5em]">
    <button className="button1 p-[0.5em] pl-[1.1em] pr-[1.1em] rounded-md mr-[0.5em] border-none outline-none bg-[#252525] text-white hover:bg-amber-400 hover:text-white duration-500" type='submit'onClick={onBtnLogin}>Log In</button>
    <button className="button2 p-[0.5em] pl-[1.1em] pr-[1.1em] rounded-md mr-[0.5em] border-none outline-none bg-[#252525] text-white hover:bg-amber-400 hover:text-white duration-500"><Link to ='/Register'>Sign Up</Link></button>
    </div>
    <button className="button3 p-[0.5em] pl-[1.1em] pr-[1.1em] rounded-md mr-[0.5em] border-none outline-none bg-[#252525] text-white hover:bg-red-600 hover:text-white duration-500">Forgot Password</button>
</form>
        </div>
    </div>
  )
}

export default Login