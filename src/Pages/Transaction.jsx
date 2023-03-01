import React from 'react'

function Transaction() {
  return (
    <div>
        <div className='bg-gray-800 pt-24 pb-20 flex justify-center'>
            <div className='w-1/2 h-1/2 p-2 rounded-2xl shadow-md shadow-white bg-gray-500'>
                <div className='flex flex-col gap-4'>
                <h1 className='text-center font-bold '>Order Detail</h1>
                <div className='flex gap-2 '>
                    <img className='w-20 h-20 rounded-xl' src="https://i.etsystatic.com/20994222/r/il/b44dbb/3211661572/il_570xN.3211661572_5u7s.jpg" alt="" />
                    <div className=' w-full flex justify-between items-center'>
                        <div>
                            <h1>Cloth</h1>
                            <h2>1x</h2>
                        </div>
                        <h1 className='text-blue-800 font-bold'>$20.00</h1>
                    </div>
                </div>

                <div className='flex gap-2 '>
                    <img className='w-20 h-20 rounded-xl' src="https://i.etsystatic.com/20994222/r/il/b44dbb/3211661572/il_570xN.3211661572_5u7s.jpg" alt="" />
                    <div className=' w-full flex justify-between items-center'>
                        <div>
                            <h1>Cloth</h1>
                            <h2>1x</h2>
                        </div>
                        <h1 className='text-blue-800 font-bold'>$20.00</h1>
                    </div>
                </div>

                <div className='flex gap-2 '>
                    <img className='w-20 h-20 rounded-xl' src="https://i.etsystatic.com/20994222/r/il/b44dbb/3211661572/il_570xN.3211661572_5u7s.jpg" alt="" />
                    <div className=' w-full flex justify-between items-center'>
                        <div>
                            <h1>Cloth</h1>
                            <h2>1x</h2>
                        </div>
                        <h1 className='text-blue-800 font-bold'>$20.00</h1>
                    </div>
                </div>
                <div className='flex justify-between border-t'>
                <h1 className='font-bold '>Total</h1>
                <h1 className='font-bold text-blue-800 '>$60.00</h1>
                </div>
                <button className='bg-blue-500 rounded-2xl font-bold hover:text-white hover:bg-black'>Continue to Payment</button>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Transaction