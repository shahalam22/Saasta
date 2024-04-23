import React from 'react'
import ShortTagMid from '../components/ShortTagMid'
import FAQ from '../components/FAQ'
import { BiSolidMessageDetail } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";


export default function Contact() {
  return (
    <>
    <div className='flex flex-col md:flex-row md:mx-10 mt-16 md:mt-32 justify-center items-center'>
        <div className='text-center md:text-left mx-auto md:mr-16 sm:w-2/3'>
            <h1 className='text-[40px] lg:text-6xl font-semibold'>Contact Us</h1>
            <p className='lg:text-lg mt-3'>Need assistance or have Questions? Don't hesitate to reach out to us. Our dedicated team is here to help.</p>
        </div>

        <div className='bg-[#131412] w-3/4 my-10 p-5 text-center rounded-3xl'>
            <div className='w-full flex gap-4 mb-4'>
                <div className='w-full flex flex-col text-left'>                
                    <label htmlFor="name">Name</label>
                    <input className='rounded-lg p-3  my-2' type="text" id='name' placeholder='John Doe'/>
                </div>
                <div className='w-full flex flex-col text-left'>                
                    <label htmlFor="email">E-mail</label>
                    <input className='rounded-lg p-3  my-2' type="email" id='email' placeholder='example@gmail.com'/>
                </div>
            </div>
            <div className='flex flex-col text-left mb-4'>
                <label htmlFor="message">Message</label>
                <textarea className='w-full rounded-xl p-3 my-2' id='message' placeholder='Enter your message here'/>
            </div>
            <button className='bg-[#a0e00d] text-black w-full rounded-xl py-2'>Submit</button>
        </div>
    </div>



    <div className='flex flex-col md:grid md:grid-cols-3 md:gap-4 md:text-left justify-space-around items-center mx-[5%] lg:mx-20 mt-20 mb-20'>
        <div className='mx-2 my-5'>
            <MdEmail color='#a0e00d' size={"2rem"} className='mb-5'/>
            <h1 className='text-[40px] lg:text-4xl font-semibold'>E mail</h1>
            <p className='lg:text-lg mt-3'>Are you tired of juggling endless spreadsheets, emails, and sticky notes to manage your projects?</p>
            <p className='lg:text-lg mt-3'>shahalamabir21@gmail.com</p>
        </div>      
        <div className='mx-2 my-5'>
            <BiSolidMessageDetail color='#a0e00d' size={"2rem"} className='mb-5'/>
            <h1 className='text-[40px] lg:text-4xl font-semibold'>Live Chat</h1>
            <p className='lg:text-lg mt-3'>Are you tired of juggling endless spreadsheets, emails, and sticky notes to manage your projects</p>
            <p className='lg:text-lg mt-3'>01869230211</p>
        </div>      
        <div className='mx-2 my-5'>
            <FaPhone color='#a0e00d' size={"2rem"} className='mb-5'/>
            <h1 className='text-[40px] lg:text-4xl font-semibold'>Phone</h1>
            <p className='lg:text-lg mt-3'>Are you tired of juggling endless spreadsheets, emails, and sticky notes to manage your projects?</p>
            <p className='lg:text-lg mt-3'>01869230211</p>
        </div>      
    </div>

    
    <div className='flex flex-col justify-center items-center text-center mx-[5%] lg:mx-auto mt-32 mb-20 lg:w-2/3'>
        <ShortTagMid tagName={"FAQ"}/>
        <h1 className='text-[40px] lg:text-5xl font-semibold my-10 lg:my-16'>Frequently Asked Questions (FAQs)</h1>
        <div>
            <FAQ text={"What exactly is project management software, and how can it benefit my team?"} description={"Project management software is a tool designed to help teams plan, organize, and execute projects efficiently. It benefits your team by providing centralized communication, task management, and progress tracking."}/>
            <FAQ text={"Is your project management software suitable for teams of all sizes?"} description={"Yes, our project management software is designed to cater to teams of all sizes, from small startups to large enterprises. Whether you're managing a handful of tasks or overseeing complex projects with multiple stakeholders"}/>
            <FAQ text={"Can I customize and integrate SaaS applications with other tools?"} description={"Yes, many SaaS applications offer customization and integration options to tailor them to your business needs and workflows."}/>
            <FAQ text={"Is SaaS suitable for startups and small businesses?"} description={"Yes, SaaS is well-suited for startups and small businesses due to its affordability, scalability, and accessibility."}/>
            <FAQ text={"How can SaaS benefit my business?"} description={"SaaS offers benefits such as cost-effectiveness, scalability, accessibility, and security, making it an ideal choice for startups and small businesses."}/>
        </div>        
    </div>
    </>
  )
}
