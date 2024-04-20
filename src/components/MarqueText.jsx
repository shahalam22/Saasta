import React from 'react';
import { motion } from 'framer-motion';

const MarqueeText = () => {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      animate={{
        scrollLeft: [0, 200, 0],
        transition: { duration: 2, loop: Infinity, ease: 'linear' },
      }}
    >
      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, voluptates asperiores cupiditate rem beatae quos maiores, rerum aliquid illo consequatur et! Veritatis nesciunt repellat expedita blanditiis aliquid repudiandae quasi fugiat!</h1>
    </motion.div>
  );
};

export default MarqueeText;