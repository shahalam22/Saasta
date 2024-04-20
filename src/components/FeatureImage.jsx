import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



export default function ShortTag({imgUrl, alt, xValue, yValue}) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const imageTransitionVariants1 = {
        hidden: {
            x: xValue,
            y: yValue,
            opacity: 0,
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: 'easeInOut',
            },
        },
    }

    useEffect(() => {        
        if(inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

  return (
    <motion.img 
        src={imgUrl} 
        alt={alt} 
        className='rounded-xl my-14'
        ref = {ref}
        animate = {controls}
        initial = 'hidden'
        variants={imageTransitionVariants1}
    />
  )
}
