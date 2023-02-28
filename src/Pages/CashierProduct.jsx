import React from 'react'
import Sidenavbar from '../Components/Sidenavbar'
import Navbar from '../Components/Navbar'
import {BsCart4} from 'react-icons/bs'

function CashierProduct() {
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
            <div className='flex justify-evenly p-4'>
                <div className='w-48'>
                <img className='w-48 h-48 rounded-2xl' src="https://media.istockphoto.com/id/1322690989/vector/vector-illustration-concert-ticket-template-concert-party-or-festival-ticket-design-template.jpg?s=612x612&w=0&k=20&c=YIwOtmLIGK4NTMeaKrqpQdoxjDzM1C4L5SQb8cQP_kU=" alt="" />
                <div className='flex justify-between py-1'>
                <h1 className='p-1'>Ticket</h1>
                <button className=' bg-orange-400 p-1 flex gap-1 rounded-xl'> <BsCart4 className='text-xl' />Purchase</button>
                </div>
                </div>

                <div className='w-48'>
                <img className='w-48 h-48 rounded-2xl' src="https://media.istockphoto.com/id/1322690989/vector/vector-illustration-concert-ticket-template-concert-party-or-festival-ticket-design-template.jpg?s=612x612&w=0&k=20&c=YIwOtmLIGK4NTMeaKrqpQdoxjDzM1C4L5SQb8cQP_kU=" alt="" />
                <div className='flex justify-between py-1'>
                <h1 className='p-1'>Ticket</h1>
                <button className=' bg-orange-400 p-1 flex gap-1 rounded-xl'> <BsCart4 className='text-xl' />Purchase</button>
                </div>
                </div>

                <div className='w-48'>
                <img className='w-48 h-48 rounded-2xl' src="https://media.istockphoto.com/id/1322690989/vector/vector-illustration-concert-ticket-template-concert-party-or-festival-ticket-design-template.jpg?s=612x612&w=0&k=20&c=YIwOtmLIGK4NTMeaKrqpQdoxjDzM1C4L5SQb8cQP_kU=" alt="" />
                <div className='flex justify-between py-1'>
                <h1 className='p-1'>Ticket</h1>
                <button className=' bg-orange-400 p-1 flex gap-1 rounded-xl'> <BsCart4 className='text-xl' />Purchase</button>
                </div>
                </div>

                <div className='w-48'>
                <img className='w-48 h-48 rounded-2xl' src="https://media.istockphoto.com/id/1322690989/vector/vector-illustration-concert-ticket-template-concert-party-or-festival-ticket-design-template.jpg?s=612x612&w=0&k=20&c=YIwOtmLIGK4NTMeaKrqpQdoxjDzM1C4L5SQb8cQP_kU=" alt="" />
                <div className='flex justify-between py-1'>
                <h1 className='p-1'>Ticket</h1>
                <button className=' bg-orange-400 p-1 flex gap-1 rounded-xl'> <BsCart4 className='text-xl' />Purchase</button>
                </div>
                </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default CashierProduct