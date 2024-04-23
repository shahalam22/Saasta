import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
        <footer className='mx-10 mt-56 mb-24 text-white'>
            <h1 className='text-4xl'>Saasta</h1>
            <p className='text-lg my-1'>Experience financial transformation like never before with FIntec.</p>
            <div className='flex'>
                <button className='mr-2 my-8 text-[25px] bg-[#131412] text-[#a0e00d] p-2 rounded-3xl'>
                    <FaLink/>
                </button>
                <button className='mr-2 my-8 text-[25px] bg-[#131412] text-[#a0e00d] p-2 rounded-3xl'>
                    <FaXTwitter/>
                </button>
                <button className='mr-2 my-8 text-[25px] bg-[#131412] text-[#a0e00d] p-2 rounded-3xl'>
                    <FaFacebook/>
                </button>
            </div>

            <div className='md:flex md:justify-between'>
                <div>
                    <h2 className='text-3xl mb-5 mt-4'>Page</h2>
                    <div className='flex flex-col space-y-2 text-[20px]'>
                        <Link to={"/"} className='hover:text-[#a0e00d] mt-2'>Home</Link>
                        <Link to={"/price"} className='hover:text-[#a0e00d]'>Pricing</Link>
                        <Link to={"/blog"} className='hover:text-[#a0e00d]'>Blog</Link>
                        <Link to={"/contact"} className='hover:text-[#a0e00d]'>Contact</Link>
                        <Link to={"/about"} className='hover:text-[#a0e00d]'>About Page</Link>
                        <Link to={"/error"} className='hover:text-[#a0e00d]'>404 Error Page</Link>
                        <Link to={"/blogpage"} className='hover:text-[#a0e00d]'>Blog Details Page</Link>
                    </div>
                </div>

                <div>
                    <h2 className='text-3xl mt-12 mb-5'>Contact Us</h2>
                    <div className='text-[19px] mb-10'>
                        <p>shahalamabir21@gmail.com</p>
                        <p>01869230211</p>
                        <p>Sectetariate Lane, Reli <br />Bandar, Narayanganj</p>
                    </div>
                </div>

                <div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>

            <br /><hr /><br />

            <p>© 2021 Saasta. All Rights Reserved</p>

            <div className='flex flex-col space-y-1 text-[17px] mt-5'>
                <a href="#" className='hover:text-[#a0e00d]'>Privacy Policy</a>
                <a href="#" className='hover:text-[#a0e00d]'>Cookies Policy</a>
                <a href="#" className='hover:text-[#a0e00d]'>Terms & Conditions</a>
            </div>

        </footer>
    </>
  )
}
