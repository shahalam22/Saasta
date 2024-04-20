import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

export default function CardWWD({head, paragraph, icon}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    if(inView) {
        controls.start('visible');
    }

  return (
    <motion.div className='flex p-8 bg-[#20211f] mt-5 mb-5 rounded-xl'
        ref = {ref}
        animate = {controls}
        initial = 'hidden'
        variants={divTransitionVariants}
    >
        <div>
            <div className='text-4xl p-3 rounded-xl text-[#a0e00d] bg-[#393938]'>
                {icon}
            </div>
        </div>
        <div className='text-left ml-5'>
            <h1 className='text-3xl font-semibold'>{head}</h1>
            <p className='text-lg mt-4 text-[#9c9c9b]'>{paragraph}</p>
        </div>
    </motion.div>
  )
}
