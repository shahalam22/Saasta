import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { LuAsterisk } from "react-icons/lu";

const divTransitionVariants = {
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

export default function ShortTag({tagName}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {        
        if(inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

  return (
    <motion.div 
        className='bg-[#131412] text-[#a0e00d] text-xl flex items-center mx-auto ml-0 px-4 py-1.5 rounded-3xl'
        ref = {ref}
        animate = {controls}
        initial = 'hidden'
        variants={divTransitionVariants}
    >
        <LuAsterisk/>
        <h1 className='ml-1'>{tagName}</h1>
    </motion.div>
  )
}
