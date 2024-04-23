import React from 'react'
import { motion } from 'framer-motion';
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function BlogCard({title, description, image}) {
  return (
    <>
        <motion.div className='flex flex-col justify-between bg-[#131412] text-white p-5 my-10 mx-5 rounded-xl'>
            <img src={image} alt="" className='w-full rounded-xl'/>
            <div>
                <h1 className='text-3xl mt-5'>{title}</h1>
                <p className='mt-3'>{description}</p>
                <motion.button whileHover={{translateX: 6}}>
                    <Link to={"/blogpage"} className='flex items-center mt-5'>
                      <p className='text-white mr-2'>Read More</p>
                      <MdKeyboardArrowRight size={'1.5rem'}/>
                    </Link>
                </motion.button>
            </div>
        </motion.div>
    </>
  )
}
