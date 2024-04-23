import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const cardTransitionVariants = {
    hidden: {
        y: 20,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
}

export default function PaymentCard() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    if(inView) {
        controls.start('visible');
    }

  return (
    <motion.div 
        className='flex flex-col justify-center bg-[#131412] p-10 rounded-lg my-10 w-2/3 md:w-1/2 lg:w-1/3 mx-auto'
        ref = {ref}
        animate = {controls}
        initial = 'hidden'
        variants={cardTransitionVariants}
    >
        <div className='text-left mb-2'>
            <h1 className='text-3xl'>Forever Free</h1>
            <p className='text-[19px] text-gray-400'>Forever free, ever after the launch</p>
        </div>
        <p className='text-left mb-2'><span className='text-[#a0e00d] text-[55px] font-bold'>$0</span><span className='text-xs'> / per month</span></p>
        <div className='mb-5'>
            <div className='flex items-center text-[18px] my-0.5'>
                <FaCheck className='text-[#80c920] mr-2 text-xl'/>
                <p>Ten links available</p>
            </div>
            <div className='flex items-center text-[18px] my-0.5'>
                <FaCheck className='text-[#80c920] mr-2 text-xl'/>
                <p>Own analytics paltform</p>
            </div>
            <div className='flex items-center text-[18px] my-0.5'>
                <FaCheck className='text-[#80c920] mr-2 text-xl'/>
                <p>Mobile app</p>
            </div>
            <div className='flex items-center text-[18px] my-0.5'>
                <FaCheck className='text-[#80c920] mr-2 text-xl'/>
                <p>Chat Support</p>
            </div>
            <div className='flex items-center text-[18px] my-0.5'>
                <FaCheck className='text-[#80c920] mr-2 text-xl'/>
                <p>1000 users</p>
            </div>
            <div className='flex items-center text-[18px] my-0.5'>
                <FaCheck className='text-[#80c920] mr-2 text-xl'/>
                <p>Template Library</p>
            </div>
        </div>
        <button className='text-xl borde border-4 border-white px-10 py-3 mt-8 hover:border-gray-100 hover:bg-white hover:text-black rounded-[50px]'>
            <Link to={"/price"}>
                Discover More
            </Link>
        </button>
    </motion.div>
  )
}
