import React from 'react'
import PaymentCard from '../components/PaymentCard'
import Menubar from '../components/menubar'
import ShortTagMid from '../components/ShortTagMid'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function Price() {
  return (
    <>
        <div className='flex flex-col justify-center items-left mx-[5%] lg:mx-[5%] mt-24 mb-20'>
            <ShortTagMid tagName={"PRICING"}/>

            <h1 className='text-[40px] lg:text-[45px] mx-auto mt-10 mb-16 font-semibold'>Choose the right pricing plan for you</h1>

            <div className='lg:flex lg:space-x-8'>
                <PaymentCard/>
                <PaymentCard/>
                <PaymentCard/>
            </div>
        
        </div>

        <div className='flex flex-col lg:w-2/3 mx-auto text-center justify-center items-center mx-[5%] mt-36 mb-32 py-4 px-8 rounded-xl bg-[#131412]'>

            <h1 className='text-[40px] font-semibold mt-8 mb-8'>Ready to Streamline Your Project Management?</h1>
            <p className='text-[18px]'> Join thousands of teams worldwide who trust Saasta to simplify their project workflows and drive success.</p>

            <button className='px-8 py-4 m-10 rounded-3xl bg-[#a0e00d] hover:bg-white text-black font-semibold text-[19px]'>
                <Link to={"/contact"}>
                    Get the Free Template
                </Link>
            </button>
          </div>
    </>
  )
}
