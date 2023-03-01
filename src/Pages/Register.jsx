import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Register(props) {
    const [username,setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmationpassword, setConfirmationPassword] = useState('')


    const onBtnRegister = async () => {
        try {
            let res = await axios.post ('http://localhost:5000/users/register', {
                username:username,
                email:email,
                password: password,
                confirmationpassword:confirmationpassword,
                //properti harus sama dengan backend namanya

            })
            console.log(res.data);

            //proteksi front end pake sesuai respon yang didapet dari user
            //1. check all is filled or not
            if(username === '' || email === '' ||password ===''){
                alert('Fill in all form');
            }else{
                if(res.data.success){
                    alert('register successfully')
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    if (props.loading) {
        return <h1>Loading</h1>
    } else {
  return (
    <div>
       <div className=' w-[400px] bg-gray-300 py-4 flex flex-col items-center gap-y-2 m-auto mt-28 rounded-2xl shadow-md shadow-gray-500'>
        <h1 className='text-2xl font-bold'>Register</h1>
        <div className='flex flex-col'>
            <label htmlFor="">Username</label>
            <input className='border ' type="text" placeholder='Username' onChange={(element) => setUsername(element.target.value)} />
        </div>

        <div className='flex flex-col'>
            <label htmlFor="">Email</label>
            <input className='border' type="text" placeholder='Email' onChange={(element) => setEmail(element.target.value)} />
        </div>

        <div className='flex flex-col'>
            <label htmlFor="">Password</label>
            <input className='border' type="text" placeholder='Password' onChange={(element) => setPassword(element.target.value)} />
        </div>

        <div className='flex flex-col'>
            <label htmlFor="">Confirmation Password</label>
            <input className='border' type="text" placeholder='Password' onChange={(element) => setConfirmationPassword(element.target.value)} />
        </div>
        <div className=' flex gap-4'>
        <button className='bg-orange-400 text-lg font-bold px-2 rounded-2xl my-2 hover:bg-black hover:text-white duration-500' onClick={() => onBtnRegister()}>Sign up</button>
        <button className='bg-orange-400 text-lg font-bold px-2 rounded-2xl my-2 hover:bg-black hover:text-white duration-500'><Link to='/'>Sign in</Link></button>
       </div>
       </div>
    </div>
  )
}
}

export default Register