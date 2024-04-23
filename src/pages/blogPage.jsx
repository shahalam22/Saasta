import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Footer from '../components/Footer';

export default function BlogPage() {
  return (
    <>
        <div className='flex flex-col mt-16 mb-10 w-4/5 md:w-3/4 mx-auto'>
            <h1 className='text-4xl font-semibold mt-8 mb-8 text-white'>5 Tips for Effective Project Management in Remote Teams</h1>

            <div className='flex flex-col items-left justify-between md:flex-row md:items-center'>
                <div className='flex'>
                    <img src="../../public/devid.webp" alt="Devid" width={"40px"} className='rounded-lg mr-3'/>
                    <div className='font-semibold'>
                        <h1>John Doe</h1>
                        <p>12 Mar 2024 . 5 min read</p>
                    </div>
                </div>
                <div className='flex'>
                    <button className='mr-2 my-5 text-[18px] bg-[#131412] text-[#a0e00d] p-2 rounded-3xl'>
                        <FaLink/>
                    </button>
                    <button className='mr-2 my-5 text-[18px] bg-[#131412] text-[#a0e00d] p-2 rounded-3xl'>
                        <FaXTwitter/>
                    </button>
                    <button className='mr-2 my-5 text-[18px] bg-[#131412] text-[#a0e00d] p-2 rounded-3xl'>
                        <FaFacebook/>
                    </button>
                </div>
            </div>

            <div className='mt-10'>        
                <img src="../../public/image11.webp" alt="image11" />
                <div>
                    <h1 className='text-4xl font-semibold mt-16 mb-8 text-white'>Introduction</h1>
                    <p className='text-lg'>Managing projects with a remote team presents unique challenges, but with the right strategies in place.</p>
                    <img src="../../public/image12.webp" alt="image12" className='mt-6'/>
                    <p className='text-sm'>Image caption goes here</p>

                    <p className='text-xl text-white font-semibold my-5'>Ensure that everyone on your remote team understands the project goals, objectives, and their individual responsibilities. Set clear expectations for deliverables.</p>

                    <p className='text-lg my-5'>Utilize collaboration tools and project management software to streamline workflows and facilitate teamwork. Platforms like Saasta offer features such as task management, file sharing, and real-time updates, enabling remote teams to collaborate seamlessly and track progress effectively.</p>

                    <div className='border-l border-[#a0e00d] px-4 my-3'>
                        <i className='text-xl text-white font-semibold my-5'>Remote work can blur the lines between work and personal life, leading to burnout and decreased productivity. Encourage your team members to establish boundaries between work and personal time, take regular breaks, and prioritize self-care.</i>
                    </div>

                    <p className='text-lg my-5'>Effective project management in remote teams requires clear communication, goal setting, collaboration, trust, and work-life balance. By implementing these tips, you can lead your remote team to success and achieve your project goals efficiently and effectively.</p>

                    <h1 className='text-4xl font-semibold mt-10 mb-4 text-white'>Consclusion</h1>

                    <p className='text-lg'>In conclusion, effective project management in remote teams requires clear communication, goal setting, collaboration, trust, and work-life balance. By implementing these tips, you can lead your remote team to success and achieve your project goals efficiently and effectively.</p>

                    <hr className='my-10'/>
                </div>
            </div>
        </div>
    </>       
  )
}
