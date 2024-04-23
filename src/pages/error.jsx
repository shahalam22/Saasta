import React from 'react'

export default function Error() {
  return (
    <div className='flex flex-col lg:w-2/3 w-3/4 mx-auto text-center justify-center items-center mx-[5%] mt-36 mb-32 py-4 px-8 rounded-xl bg-[#131412]'>
        <h1 className='text-5xl font-semibold mt-8 mb-8 text-[#a0e00d]'>404</h1>
        <p className='text-[18px]'> Join thousands of teams worldwide who trust Saasta to simplify their project workflows and drive success.</p>
        <button className='px-8 py-4 m-10 rounded-3xl bg-[#a0e00d] hover:bg-white text-black font-semibold text-[19px]'>Go to Home</button>
    </div>
  )
}
