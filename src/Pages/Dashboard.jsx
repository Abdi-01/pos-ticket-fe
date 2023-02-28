import React from 'react';
import Sidenavbar from '../Components/Sidenavbar';
import Navbar from '../Components/Navbar'
import {BsCart4} from 'react-icons/bs'

function LandingPage() {
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
            </div>
            </div>
            <div className='flex justify-evenly p-4 '>
                <div className='w-48'>
                <img className='w-48 h-48 rounded-2xl' src="https://img.freepik.com/free-vector/live-concert-ticket_53876-67419.jpg" alt="" />
                <h1 className='font-semibold text-center'>Platinum Ticket</h1>
                <div className='flex justify-between py-1'>
                <h1 className='p-1'>$200</h1>
                <button className=' bg-orange-400 p-1 flex gap-1 rounded-xl'> <BsCart4 className='text-xl' />Purchase</button>
                </div>
                </div>

                <div className='w-48'>
                <img className='w-48 h-48 rounded-2xl' src="https://media.istockphoto.com/id/1322690989/vector/vector-illustration-concert-ticket-template-concert-party-or-festival-ticket-design-template.jpg?s=612x612&w=0&k=20&c=YIwOtmLIGK4NTMeaKrqpQdoxjDzM1C4L5SQb8cQP_kU=" alt="" />
                <h1 className='font-semibold text-center'>VVIP Ticket</h1>
                <div className='flex justify-between py-1'>
                <h1 className='p-1'>$180</h1>
                <button className=' bg-orange-400 p-1 flex gap-1 rounded-xl'> <BsCart4 className='text-xl' />Purchase</button>
                </div>
                </div>

                <div className='w-48'>
                <img className='w-48 h-48 rounded-2xl' src="https://img.freepik.com/free-psd/ticket-template-summer-festival_23-2148174538.jpg" alt="" />
                <h1 className='font-semibold text-center'>VIP Ticket</h1>
                <div className='flex justify-between py-1'>
                <h1 className='p-1'>$150</h1>
                <button className=' bg-orange-400 p-1 flex gap-1 rounded-xl'> <BsCart4 className='text-xl' />Purchase</button>
                </div>
                </div>

                <div className='w-48'>
                <img className='w-48 h-48 rounded-2xl' src="https://t4.ftcdn.net/jpg/05/66/97/63/360_F_566976397_ODQcuTnWzIa4NLVWmuiQlb09Nm8deMk6.jpg" alt="" />
                <h1 className='font-semibold text-center'>Regular Ticket</h1>
                <div className='flex justify-between py-1'>
                <h1 className='p-1'>$100</h1>
                <button className=' bg-orange-400 p-1 flex gap-1 rounded-xl'> <BsCart4 className='text-xl' />Purchase</button>
                </div>
                </div>


            </div>
        </div>
        <div></div>
        </div>
        
    </div>


    );
}

export default LandingPage;