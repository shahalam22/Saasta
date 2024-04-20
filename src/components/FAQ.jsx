import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { motion } from 'framer-motion';

export default function FAQ({text, description}) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

  return (
    <button onClick={handleClick} className='bg-[#131412] mx-2 my-6 p-8 text-xl text-left rounded-2xl w-full'>
        <div className='flex justify-between'>
            <p className='mr-10'>{text}</p>
            <button onClick={handleClick}>{isOpen ? <FaAngleUp/>:<FaAngleDown/>}</button>
        </div>
        {
            isOpen && (
                <motion.div
                    initial={{ height: 0}}
                    animate={{ height: 'auto'}}
                    // exit={{ height: 0}}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden'}}
                >
                    <br/>
                    <p className='text-gray-400'>{description}</p>
                </motion.div>
            )
        }
    </button>
  )
}
