import React from 'react'
import Footer from '../components/Footer'
import Menubar from '../components/menubar'
import BlogCard from '../components/BlogCard'

export default function Blog() {
  return (
    <>  
        <h1 className='text-[40px] text-center my-24 lg:text-6xl font-semibold'>Explore Blogs</h1>
                    
        {/* <h1></h1> */}

        <div className='md:grid md:grid-cols-3 md:gap-x-6 mx-10'>
            <BlogCard title={"Title 1"} image={'../../public/blog1.webp'} description={"This is description of the blog 1. This is all about our technical reports"}/>
            <BlogCard title={"Title 2"} image={'../../public/blog2.webp'} description={"This is description of the blog 2. This is all about our technical reports"}/>
            <BlogCard title={"Title 3"} image={'../../public/blog3.webp'} description={"This is description of the blog 3. This is all about our technical reports"}/>
        </div>

        <div className='text-center'>
            <button className='bg-[#a0e00d] hover:bg-white text-[#131412] text-lg font-semibold px-5 py-3 rounded-[35px] mx-auto'>Load More</button>
        </div>
    </>
  )
}
