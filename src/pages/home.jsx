import React, { useEffect, useRef, useState } from 'react'
import Menubar from '../components/menubar'
import { FaCheck, FaFacebook } from "react-icons/fa6";
import { motion, useAnimation } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { LuAsterisk } from "react-icons/lu";
import { IoMdContacts } from "react-icons/io";
import { useInView } from 'react-intersection-observer';
import CardWWD from '../components/CardWWD';
import { MdCenterFocusStrong } from "react-icons/md";
import { TbDeviceIpadSearch } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import ShortTag from '../components/ShortTag';
import FeatureImage from '../components/FeatureImage';
import { RiTreeFill } from "react-icons/ri";
import '../index.css';
import ShortTagMid from '../components/ShortTagMid';
import PaymentCard from '../components/PaymentCard';
import FAQ from '../components/FAQ';
import { FaLink } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
// import { image } from '../../public/image.webp';


// const divTransitionVariants = {
//     hidden: {
//         y: 20,
//         opacity: 0,
//     },
//     visible: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             duration: 1,
//             ease: 'easeInOut',
//         },
//     },
// }



export default function Home() {
    const [email, setEmail] = useState('');
    
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {

        if(inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
    }

  return (
    <>
    
        <header className='fixed top-0 w-full'>
            <Menubar/>
        </header>


        <div className='flex flex-col text-center justify-center items-center mx-[5%] mt-48 mb-32'>
            <h1 className='text-4xl font-semibold'><span className='text-[#a0e00d]'>Enhance</span> The Way You Present Your <span className='text-[#80c920]'>SAAS Business</span></h1>
            <p className='text-lg my-6'>Welcome to Volcano, where innovation meets simplicity. We are dedicated to providing best solutions for your business</p>

            <div className='flex justify-between border border-gray-500 border rounded-[20px] text-md w-[85%] py-3 px-6 mt-6'>
                <input type='email' value={email} onChange={handleChange} placeholder='Enter your email' className=' bg-[#242424] focus:outline-none'></input>
                <button type='submit' onClick={handleSubmit} className='bg-[#a0e00d] text-black rounded-lg px-6 py-2 hover:shadow-md'>Get Started</button>
            </div>
            <div className='flex w-[70%] text-sm justify-around items-center mt-3 mb-20'>
                <div className='flex'>
                    <FaCheck className='text-[#a0e00d] mx-2'/>
                    <p>No credit card requied</p>
                </div>
                <div className='flex mr-2'>
                    <FaCheck className='text-[#a0e00d] mx-2'/>
                    <p> 7 days free trial </p>
                </div>
            </div>

            <img src="../../public/image.webp" alt="image" />
        </div>


        <div className='flex flex-col text-center justify-center items-center mx-[5%] mt-24 mb-32 overflow-hidden'>
            <Marquee autoFill>
                <img style={{width: "200px"}} className='mx-16 opacity-50' src="../../public/asana.png" alt="asana" />
                <p className='text-4xl opacity-50'>|</p>
                <img style={{width: "200px"}} className='mx-16 opacity-50' src="../../public/classpass.png" alt="asana" />
                <p className='text-4xl opacity-50'>|</p>
                <img style={{width: "200px"}} className='mx-16 opacity-50' src="../../public/afterpay.png" alt="asana" />
                <p className='text-4xl opacity-50'>|</p>
                <img style={{width: "200px"}} className='mx-16 opacity-50' src="../../public/hotjar.png" alt="asana" />
                <p className='text-4xl opacity-50'>|</p>
                <img style={{width: "200px"}} className='mx-16 opacity-50' src="../../public/maze.png" alt="asana" />
                <p className='text-4xl opacity-50'>|</p>
            </Marquee>
        </div>
        
        
        <div className='flex flex-col text-center justify-center items-center mx-[5%] mt-24 mb-32'>
            <ShortTagMid tagName={"How it works"}/>

            <h1 className='text-5xl font-semibold mt-10 mb-16'>Enhanched corporate framework</h1>
        
            <CardWWD head={'Extremely Flexible'} paragraph={`We believe in pushing the boundaries of what's possible explore emerging technology`} icon={<IoMdContacts/>}/>
            <CardWWD head={'Easy To Customize'} paragraph={`Enjoy a unified workspace by bringing together to all your favorite tools under one`} icon={<MdCenterFocusStrong/>}/>
            <CardWWD head={'Concrete Security'} paragraph={`Knowing the cost of acquiring customers and the costing of the main service.`} icon={<TbDeviceIpadSearch/>}/>
            <CardWWD head={'Easy Payment'} paragraph={`Comprehend the behavior of group participants in relation to tasks, standards.`} icon={<MdPayment/>}/>
            <CardWWD head={'Cloud based access'} paragraph={`The cloud offers easy setup, high availability and lower to maintenance costs.`} icon={<FaCloudDownloadAlt/>}/>
            <CardWWD head={'Advanced Analytics'} paragraph={`We believe in pushing the boundaries of what's possible explore emerging technology`} icon={<SiSimpleanalytics/>}/>
        </div>


        <div className='flex flex-col mx-[5%] mt-24 mb-20'>

            <FeatureImage imgUrl={'../../public/image2.webp'} alt={'image2'} xValue={-100} yValue={50}/>

            <ShortTag tagName={'Features'}/>

            <div className='my-3'>
                <h1 className='text-5xl font-semibold'><span className='text-[#a0e00d]'>Empower</span> your business with strategic <span className='text-[#80c920]'>insights</span></h1>
                <p className='text-xl my-6'>SaaS financial models are documents that outline your SaaS business’s financial performance and projections for you and your investors. Embrace the future of software solutions today!</p>
            </div>

            <button className='bg-[#a0e00d] text-[#131412] text-xl font-semibold p-5 rounded-[35px] mx-auto ml-0'>Discover More</button>
        </div>


        <div className='flex flex-col mx-[5%] mt-20 mb-20'>

            <FeatureImage imgUrl={'../../public/image3.webp'} alt={'image3'} xValue={100} yValue={50}/>

            <ShortTag tagName={'Features'}/>

            <div className='my-3'>
                <h1 className='text-5xl font-semibold'>Task and project <span className='text-[#80c920]'>management</span></h1>
                <p className='text-xl my-6'>We pride ourselves on our strong set of values that guide our actions and decision-making processes.</p>
            </div>
            
            <div>
                <div className='flex items-center text-[16px] my-0.5'>
                    <FaCheck className='text-[#80c920] mr-2 text-lg'/>
                    <p>Tasks to reduce manual effort and increase productivity</p>
                </div>
                <div className='flex items-center text-[16px] my-0.5'>
                    <FaCheck className='text-[#80c920] mr-2 text-lg'/>
                    <p>Automation tools to streamline routine processes.</p>
                </div>
                <div className='flex items-center text-[16px] my-0.5'>
                    <FaCheck className='text-[#80c920] mr-2 text-lg'/>
                    <p>Enable team members to access project information</p>
                </div>
                <div className='flex items-center text-[16px] my-0.5'>
                    <FaCheck className='text-[#80c920] mr-2 text-lg'/>
                    <p>Task dependencies charts for project timelines</p>
                </div>
                <div className='flex items-center text-[16px] my-0.5'>
                    <FaCheck className='text-[#80c920] mr-2 text-lg'/>
                    <p>Analyze key performance to identify areas for improvement</p>
                </div>
            </div>
            {/* <button className='bg-[#a0e00d] text-[#131412] text-xl font-semibold p-5 rounded-[35px] mx-auto ml-0'>Discover More</button> */}
        </div>


        <div className='flex flex-col mx-[5%] mt-20 mb-24'>

            <ShortTag tagName={'Features'}/>

            <div className='my-3'>
                <h1 className='text-5xl font-semibold'>Streamline <span className='text-[#80c920]'>management</span> with us</h1>
                <p className='text-xl my-6'>We pride ourselves on our strong set of values that guide our actions and decision-making processes.</p>
            </div>
            
            <div>
                <div className='flex items-center text-[16px] my-0.5'>
                    <FaCheck className='text-[#80c920] mr-2 text-lg'/>
                    <p>Task charts for project timelines</p>
                </div>
                <div className='flex items-center text-[16px] my-0.5'>
                    <FaCheck className='text-[#80c920] mr-2 text-lg'/>
                    <p>User friendly task creation</p>
                </div>
                <div className='flex items-center text-[16px] my-0.5'>
                    <FaCheck className='text-[#80c920] mr-2 text-lg'/>
                    <p>Task organization and tracking</p>
                </div>
                <div className='flex items-center text-[16px] my-0.5'>
                    <FaCheck className='text-[#80c920] mr-2 text-lg'/>
                    <p>Seamless collaboration </p>
                </div>
            </div>

            <FeatureImage imgUrl={'../../public/image4.webp'} alt={'image4'} xValue={-100} yValue={50}/>
            
        </div>


        <div className='flex flex-col mx-[12%] mt-32 mb-24'>

            {/* <ShortTag tagName={'Features'}/> */}
            <div className='text-3xl bg-[#131412] text-[#a0e00d] mx-auto ml-0 p-3 rounded-xl'>
                <RiTreeFill/>
            </div>

            <div className='my-3'>
                <h1 className='text-5xl font-semibold'>Growth-oriented integration <span className='text-[#80c920]'></span></h1>
                <p className='text-xl my-6'>Empower your business with flexible and growth-oriented integration solutions & technologies</p>
            </div>
            
            <button className='bg-[#a0e00d] text-[#131412] text-[18px] font-semibold px-5 py-3 rounded-[35px] mx-auto ml-0'>Discover More</button>
        </div>


        <div className='flex flex-col mt-32 mb-24 overflow-hidden'>
            {/* <marquee behavior="scroll" direction="up" loop="0" className='z-[-1] h-[480px]'>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 mx-[20%] my-10 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="../../public/asana.png" alt="asana"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>Asana</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 mx-[20%] my-10 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="../../public/afterpay.png" alt="afterpay"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>AfterPay</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 mx-[20%] my-10 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="../../public/classpass.png" alt="classpass"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>ClassPass</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 mx-[20%] my-10 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="../../public/hotjar.png" alt="hotjar"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>Hotjar</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 mx-[20%] my-10 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="../../public/maze.png" alt="maze"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>Maze</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
            </marquee> */}


            <Marquee direction="up" className='z-[-1] h-[480px]'>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="../../public/asana.png" alt="asana"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>Asana</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="../../public/afterpay.png" alt="afterpay"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>AfterPay</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="../../public/classpass.png" alt="classpass"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>ClassPass</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="../../public/hotjar.png" alt="hotjar"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>HotJar</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="../../public/maze.png" alt="maze"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>Maze</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
            </Marquee>

        </div>


        <div className='flex flex-col text-center justify-center items-center mx-[5%] mt-36 mb-32'>
            <ShortTagMid tagName={"PRICING"}/>

            <h1 className='text-5xl font-semibold mt-10 mb-16'>Choose the right pricing plan for you</h1>

            <PaymentCard/>
            <PaymentCard/>
            <PaymentCard/>
        
        </div>


        <div className='flex flex-col text-center justify-center items-center mx-[5%] mt-24 mb-32 overflow-hidden'>
            <ShortTagMid tagName={"TESTIMONIALS"}/>

            <h1 className='text-5xl font-semibold mt-10 mb-16'>Testimonials Abut Us</h1>

            <Marquee autoFill className='z-[-1]'>
                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl border border-[#a0e00d]'>
                    <p>"I've tried many project management tools, but Saasta stands out for its simplicity and effectiveness. It has everything we need to stay organized and collaborate effectively. Our projects have never been smoother!"</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="../../public/emily.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>Emily Johnson</h1>
                            <p className='text-sm text-gray-400'>Founder of StartUpX</p>
                        </div>
                    </div>
                </div>

                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl border border-[#a0e00d]'>
                    <p>"Saasta has been a game-changer for our team. Its intuitive interface and powerful features have helped us streamline our project management processes and boost productivity. Highly recommended!"</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="../../public/michel.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>Michael Brown</h1>
                            <p className='text-sm text-gray-400'>Project Manager at Global Innovations</p>
                        </div>
                    </div>
                </div>

                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl border border-[#a0e00d]'>
                    <p>"As an IT manager, security is a top priority for me. Saasta's robust security measures and compliance standards give me peace of mind knowing that our data is safe and protected."</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="../../public/devid.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>David Johnson</h1>
                            <p className='text-sm text-gray-400'>Marketing Director, Sparkle Brands</p>
                        </div>
                    </div>
                </div>

                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl border border-[#a0e00d]'>
                    <p>"Saasta has transformed the way our marketing team operates. Its collaborative features and real-time updates have improved communication and coordination, leading to more successful campaigns and happier clients."</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="../../public/sarah.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>Sarah Miller</h1>
                            <p className='text-sm text-gray-400'>Marketing Director at Digital Agency</p>
                        </div>
                    </div>
                </div>
            </Marquee>

            <Marquee autoFill direction='right' className='z-[-1]'>
                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl  border border-[#a0e00d]'>
                    <p>"I've tried many project management tools, but Saasta stands out for its simplicity and effectiveness. It has everything we need to stay organized and collaborate effectively. Our projects have never been smoother!"</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="../../public/emily.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>Emily Johnson</h1>
                            <p className='text-sm text-gray-400'>Founder of StartUpX</p>
                        </div>
                    </div>
                </div>

                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl  border border-[#a0e00d]'>
                    <p>"Saasta has been a game-changer for our team. Its intuitive interface and powerful features have helped us streamline our project management processes and boost productivity. Highly recommended!"</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="../../public/michel.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>Michael Brown</h1>
                            <p className='text-sm text-gray-400'>Project Manager at Global Innovations</p>
                        </div>
                    </div>
                </div>

                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl  border border-[#a0e00d]'>
                    <p>"As an IT manager, security is a top priority for me. Saasta's robust security measures and compliance standards give me peace of mind knowing that our data is safe and protected."</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="../../public/devid.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>David Johnson</h1>
                            <p className='text-sm text-gray-400'>Marketing Director, Sparkle Brands</p>
                        </div>
                    </div>
                </div>

                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl  border border-[#a0e00d]'>
                    <p>"Saasta has transformed the way our marketing team operates. Its collaborative features and real-time updates have improved communication and coordination, leading to more successful campaigns and happier clients."</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="../../public/sarah.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>Sarah Miller</h1>
                            <p className='text-sm text-gray-400'>Marketing Director at Digital Agency</p>
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>


        <div className='flex flex-col text-center justify-center items-center mx-[5%] mt-36 mb-32'>
            <ShortTagMid tagName={"FAQ"}/>

            <h1 className='text-5xl font-semibold mt-10 mb-16'>Frequently Asked Questions (FAQs)</h1>

            <div>
                <FAQ text={"What exactly is project management software, and how can it benefit my team?"} description={"Project management software is a tool designed to help teams plan, organize, and execute projects efficiently. It benefits your team by providing centralized communication, task management, and progress tracking."}/>
                <FAQ text={"Is your project management software suitable for teams of all sizes?"} description={"Yes, our project management software is designed to cater to teams of all sizes, from small startups to large enterprises. Whether you're managing a handful of tasks or overseeing complex projects with multiple stakeholders"}/>
                <FAQ text={"Can I customize and integrate SaaS applications with other tools?"} description={"Yes, many SaaS applications offer customization and integration options to tailor them to your business needs and workflows."}/>
                <FAQ text={"Is SaaS suitable for startups and small businesses?"} description={"Yes, SaaS is well-suited for startups and small businesses due to its affordability, scalability, and accessibility."}/>
                <FAQ text={"How can SaaS benefit my business?"} description={"SaaS offers benefits such as cost-effectiveness, scalability, accessibility, and security, making it an ideal choice for startups and small businesses."}/>
            </div>
        
        </div>


        <div className='flex flex-col text-center justify-center items-center mx-[5%] mt-36 mb-32 py-4 px-8 border border-[#a0e00d] rounded-xl bg-[#131412]'>

            <h1 className='text-[40px] font-semibold mt-8 mb-8'>Ready to Streamline Your Project Management?</h1>
            <p className='text-[18px]'> Join thousands of teams worldwide who trust Saasta to simplify their project workflows and drive success.</p>

            <button className='px-8 py-4 m-10 rounded-3xl bg-[#a0e00d] hover:bg-white text-black font-semibold text-[19px]'>Get the Free Template</button>
        </div>

        
        <footer className='mx-10 mt-56 mb-24 text-white'>
            <h1 className='text-3xl'>Saasta</h1>
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

            <h2 className='text-3xl mb-5 mt-4'>Page</h2>
            <div className='flex flex-col space-y-2 text-[20px]'>
                <a href="#" className='hover:text-[#a0e00d] mt-2'>Home</a>
                <a href="#" className='hover:text-[#a0e00d]'>Pricing</a>
                <a href="#" className='hover:text-[#a0e00d]'>Blog</a>
                <a href="#" className='hover:text-[#a0e00d]'>Contact</a>
                <a href="#" className='hover:text-[#a0e00d]'>About Page</a>
                <a href="#" className='hover:text-[#a0e00d]'>404 Error Page</a>
                <a href="#" className='hover:text-[#a0e00d]'>Blog Details Page</a>
            </div>

            <h2 className='text-3xl mt-12 mb-5'>Contact Us</h2>
            <div className='text-[19px] mb-10'>
                <p>shahalamabir21@gmail.com</p>
                <p>01869230211</p>
                <p>Sectetariate Lane, Reli <br />Bandar, Narayanganj</p>
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
