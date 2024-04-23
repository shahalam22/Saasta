// import React, { useState } from 'react';
// import { FaBars } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// export default function Menubar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className='bg-gray-800 border border-gray-500 rounded-[20px] text-white flex justify-between items-center px-16 py-6 mx-8 my-10'>
//       <h1 className="text-2xl font-bold flex-grow">My App</h1>
//       <button className='text-2xl focus:outline-none' onClick={toggleMenu}><FaBars /></button>
//       {/* Menu Content */}
//       <motion.div 
//         className={`flex flex-col absolute top-32 left-0 bg-gray-800 w-full px-6 py-4 ease-in-out ${isOpen ? '' : 'hidden'}`}
//         animate={isOpen ? 'open' : 'closed'}
//         variants={{
//           open: { y: 0, opacity: 1, transition: { duration: 0.5 } },
//           closed: { y: '-100%', opacity: 0, transition: { duration: 0.5 } },
//         }}
//       >
//         <ul className='flex flex-col space-y-2 text-center'>
//           <li className="hover:text-gray-400">Home</li>
//           <li className="hover:text-gray-400">About</li>
//           <li className="hover:text-gray-400">Contact</li>
//         </ul>
//       </motion.div>
//     </nav>
//   );
// }




import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Menubar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
        className={`bg-[#242424] border border-gray-500 ${isOpen? 'rounded-[10px]': 'rounded-[50px]'} text-white px-12 py-6 mx-5 my-6 flex flex-col`}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
            open: { transition: { ease: 'easeInOut', duration: 0.5}},
            closed: { transition: { ease: 'easeInOut', duration: 0.5}}
        }}
    >
      <div className='flex justify-between items-center'>
        <h1 className="text-2xl font-bold flex-grow">
          <Link to={"/"}>
            SAASTA
          </Link>
        </h1>
        <button className='text-2xl focus:outline-none' onClick={toggleMenu}>
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>
        <motion.div 
          className={`flex flex-col  pt-10 pb-6 px-6 ${isOpen ? '' : 'hidden'}`}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: { y: 0, opacity: 1, transition: { duration: 0.5 } },
            closed: { y: '-100%', opacity: 0, transition: { duration: 0.5 } },
          }}
        >
          <ul className='flex flex-col space-y-2 text-center'>
            <li className="text-lg hover:text-gray-400">Home</li>
            <li className="text-lg hover:text-gray-400">About</li>
            <li className="text-lg hover:text-gray-400">Blog</li>
            <li className="text-lg hover:text-gray-400">Contact</li>
          </ul>
        </motion.div>
    </motion.nav>
  );
}