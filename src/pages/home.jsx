import React, { useEffect, useRef, useState } from 'react'
import Menubar from '../components/menubar'
import { FaCheck, FaFacebook } from "react-icons/fa6";
import { motion, useAnimation } from 'framer-motion';
import Marquee from 'react-fast-marquee';
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
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';




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
    
        <div style={{backgroundImage:`url('../public/background.png')` }}>

            <div className='flex flex-col text-center justify-center items-center mx-[5%] lg:mx-auto mt-16 mb-32'>
                <ShortTagMid tagName={'SAAS Template'}/>
                <div className='md:w-[60%] sm:w-[80%] my-5'>
                    <h1 className='text-[40px] lg:text-6xl font-semibold'><span className='text-[#a0e00d]'>Enhance</span> The Way You Present Your <span className='text-[#80c920]'>SAAS Business</span></h1>
                    <p className='text-lg md:text-xl my-6 mx-[10%]'>Welcome to Volcano, where innovation meets simplicity. We are dedicated to providing best solutions for your business</p>
                </div>

                <div className='flex justify-between border border-gray-500 border rounded-[20px] text-md w-[85%] md:w-[600px] py-3 px-6 mt-6'>
                    <input type='email' value={email} onChange={handleChange} placeholder='Enter your email' className=' bg-[#070806] focus:outline-none'></input>
                    <button type='submit' onClick={handleSubmit} className='bg-[#a0e00d] hover:bg-white text-black rounded-lg px-6 py-2 hover:shadow-md'>Get Started</button>
                </div>
                <div className='flex w-[70%] md:w-[50%] text-sm justify-around items-center mt-3 mb-20'>
                    <div className='flex'>
                        <FaCheck className='text-[#a0e00d] mx-2'/>
                        <p>No credit card requied</p>
                    </div>
                    <div className='flex mr-2'>
                        <FaCheck className='text-[#a0e00d] mx-2'/>
                        <p> 7 days free trial </p>
                    </div>
                </div>

                <img src="/image.webp" alt="image" className='w-[98%] lg:w-[95%] mt-5'/>
            </div>
        </div>


        <div className='flex flex-col text-center justify-center items-center mx-[5%] mt-40 mb-40 overflow-hidden'>
            <Marquee autoFill className='z-[-1]'>
                <img style={{width: "200px"}} className='mx-16 opacity-50' src="/asana.png" alt="asana" />
                <p className='text-4xl opacity-50'>|</p>
                <img style={{width: "200px"}} className='mx-16 opacity-50' src="/classpass.png" alt="asana" />
                <p className='text-4xl opacity-50'>|</p>
                <img style={{width: "200px"}} className='mx-16 opacity-50' src="/afterpay.png" alt="asana" />
                <p className='text-4xl opacity-50'>|</p>
                <img style={{width: "200px"}} className='mx-16 opacity-50' src="/hotjar.png" alt="asana" />
                <p className='text-4xl opacity-50'>|</p>
                <img style={{width: "200px"}} className='mx-16 opacity-50' src="/maze.png" alt="asana" />
                <p className='text-4xl opacity-50'>|</p>
            </Marquee>
        </div>
        
        
        <div className='flex flex-col text-center justify-center items-center mx-[5%] mt-24 mb-32 lg:mx-auto'>
            <ShortTagMid tagName={"How it works"}/>

            <h1 className='text-[40px] lg:text-6xl font-semibold my-12'>Enhanched corporate framework</h1>
        
            <div className='lg:grid lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4 lg:mx-8 xs:mx-4'>
                <CardWWD head={'Extremely Flexible'} paragraph={`We believe in pushing the boundaries of what's possible explore emerging technology`} icon={<IoMdContacts/>}/>
                <CardWWD head={'Easy To Customize'} paragraph={`Enjoy a unified workspace by bringing together to all your favorite tools under one`} icon={<MdCenterFocusStrong/>}/>
                <CardWWD head={'Concrete Security'} paragraph={`Knowing the cost of acquiring customers and the costing of the main service.`} icon={<TbDeviceIpadSearch/>}/>
                <CardWWD head={'Easy Payment'} paragraph={`Comprehend the behavior of group participants in relation to tasks, standards.`} icon={<MdPayment/>}/>
                <CardWWD head={'Cloud based access'} paragraph={`The cloud offers easy setup, high availability and lower to maintenance costs.`} icon={<FaCloudDownloadAlt/>}/>
                <CardWWD head={'Advanced Analytics'} paragraph={`We believe in pushing the boundaries of what's possible explore emerging technology`} icon={<SiSimpleanalytics/>}/>
            </div>
        </div>


        <div className='flex flex-col lg:flex-row lg:flex-row-reverse justify-center items-center mx-[5%] mt-24 mb-20'>

            <div className='lg:ml-20 mx-auto'>
                <FeatureImage imgUrl={'/image2.webp'} alt={'image2'} xValue={-100} yValue={50}/>
            </div>

            <div className='flex flex-col'>
                <ShortTag tagName={'Features'}/>
                <div className='my-3'>
                    <h1 className='text-4xl md:text-5xl font-semibold'><span className='text-[#a0e00d]'>Empower</span> your business with strategic <span className='text-[#80c920]'>insights</span></h1>
                    <p className='text-xl my-6'>SaaS financial models are documents that outline your SaaS business’s financial performance and projections for you and your investors. Embrace the future of software solutions today!</p>
                </div>
                <button className='bg-[#a0e00d] hover:bg-white text-[#131412] text-xl font-semibold p-5 rounded-[35px] mx-auto ml-0'>
                    <Link to={"/about"}>
                        Discover More
                    </Link>
                </button>
            </div>        
        </div>


        <div className='flex flex-col lg:flex-row justify-center items-center mx-[5%] mt-24 mb-20'>

            <div className='lg:mr-20 mx-auto'>
                <FeatureImage imgUrl={'/image3.webp'} alt={'image3'} xValue={100} yValue={50}/>
            </div>

            <div className='flex flex-col items-left'>
                <ShortTag tagName={'Features'}/>
                <div className='my-3'>
                    <h1 className='text-4xl md:text-5xl font-semibold'>Task and project <span className='text-[#80c920]'>management</span></h1>
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
            </div>
        </div>


        <div className='flex flex-col lg:flex-row justify-center items-center mx-[5%] mt-24 mb-20'>
            <div className='flex flex-col items-left'>
                <ShortTag tagName={'Features'}/>
                <div className='my-3'>
                    <h1 className='text-4xl md:text-5xl font-semibold'>Streamline <span className='text-[#80c920]'>management</span> with us</h1>
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
            </div>

            <div className='lg:ml-20 mx-auto'>
                <FeatureImage imgUrl={'/image4.webp'} alt={'image4'} xValue={-100} yValue={50}/>
            </div>
        </div>


        <div className='flex flex-col justify-center items-left mx-[5%] lg:mx-auto mt-24 mb-20 lg:w-2/3'>

            {/* <ShortTag tagName={'Features'}/> */}
            <div className='text-3xl bg-[#131412] text-[#a0e00d] mx-auto ml-0 p-3 rounded-xl'>
                <RiTreeFill/>
            </div>

            <div className='my-3'>
                <h1 className='text-4xl md:text-5xl font-semibold'>Growth-oriented integration <span className='text-[#80c920]'></span></h1>
                <p className='text-xl my-6'>Empower your business with flexible and growth-oriented integration solutions & technologies</p>
            </div>
            
            <button className='bg-[#a0e00d] hover:bg-white text-[#131412] text-[18px] font-semibold px-5 py-3 rounded-[35px] mx-auto ml-0'>
                <Link to={"/about"}>
                    Discover More
                </Link>
            </button>
        </div>


        <div className='flex flex-col lg:flex-row justify-center items-center mt-24 mb-20 mx-auto overflow-hidden'>
            <Marquee direction="up" className='z-[-1] h-[480px] md:h-[600px]'>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="/asana.png" alt="asana"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>Asana</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="/afterpay.png" alt="afterpay"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>AfterPay</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="/classpass.png" alt="classpass"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>ClassPass</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="/hotjar.png" alt="hotjar"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>HotJar</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="/maze.png" alt="maze"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>Maze</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
            </Marquee>

            <Marquee direction="down" className='invisible lg:visible z-[-1] lg:h-[480px] h-[0px]'>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="/asana.png" alt="asana"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>Asana</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="/afterpay.png" alt="afterpay"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>AfterPay</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="/classpass.png" alt="classpass"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>ClassPass</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="/hotjar.png" alt="hotjar"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>HotJar</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-[#131412] py-16 px-12 rounded-3xl'>
                    <img className='my-3' style={{width: '200px'}} src="/maze.png" alt="maze"/>
                    <h1 className='text-4xl my-2 text-[#a0e00d]'>Maze</h1>
                    <p className='text-xl my-1'>Notion is a versatile all-in-one<br/>workspace application</p>
                </div>
            </Marquee>

        </div>


        <div className='flex flex-col justify-center items-left mx-[5%] lg:mx-[5%] mt-24 mb-20'>
            <ShortTagMid tagName={"PRICING"}/>

            <h1 className='text-[40px] lg:text-[45px] mx-auto mt-10 mb-16 font-semibold'>Choose the right pricing plan for you</h1>

            <div className='lg:flex lg:space-x-8'>
                <PaymentCard/>
                <PaymentCard/>
                <PaymentCard/>
            </div>
        
        </div>


        <div className='flex flex-col justify-center items-center mx-[5%] lg:mx-auto mt-24 mb-20'>
            <ShortTagMid tagName={"TESTIMONIALS"}/>

            <h1 className='text-[40px] lg:text-[45px] mx-auto mt-10 mb-16 font-semibold'>Testimonials About Us</h1>

            <Marquee autoFill className='z-[-1]'>
                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl border border-[#a0e00d]'>
                    <p>"I've tried many project management tools, but Saasta stands out for its simplicity and effectiveness. It has everything we need to stay organized and collaborate effectively. Our projects have never been smoother!"</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="/emily.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>Emily Johnson</h1>
                            <p className='text-sm text-gray-400'>Founder of StartUpX</p>
                        </div>
                    </div>
                </div>

                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl border border-[#a0e00d]'>
                    <p>"Saasta has been a game-changer for our team. Its intuitive interface and powerful features have helped us streamline our project management processes and boost productivity. Highly recommended!"</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="/michel.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>Michael Brown</h1>
                            <p className='text-sm text-gray-400'>Project Manager at Global Innovations</p>
                        </div>
                    </div>
                </div>

                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl border border-[#a0e00d]'>
                    <p>"As an IT manager, security is a top priority for me. Saasta's robust security measures and compliance standards give me peace of mind knowing that our data is safe and protected."</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="/devid.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>David Johnson</h1>
                            <p className='text-sm text-gray-400'>Marketing Director, Sparkle Brands</p>
                        </div>
                    </div>
                </div>

                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl border border-[#a0e00d]'>
                    <p>"Saasta has transformed the way our marketing team operates. Its collaborative features and have improved communication and coordination, leading to more successful campaigns and happier clients."</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="/sarah.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
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
                        <img className="rounded-xl" src="/emily.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>Emily Johnson</h1>
                            <p className='text-sm text-gray-400'>Founder of StartUpX</p>
                        </div>
                    </div>
                </div>

                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl  border border-[#a0e00d]'>
                    <p>"Saasta has been a game-changer for our team. Its intuitive interface and powerful features have helped us streamline our project management processes and boost productivity. Highly recommended!"</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="/michel.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>Michael Brown</h1>
                            <p className='text-sm text-gray-400'>Project Manager at Global Innovations</p>
                        </div>
                    </div>
                </div>

                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl  border border-[#a0e00d]'>
                    <p>"As an IT manager, security is a top priority for me. Saasta's robust security measures and compliance standards give me peace of mind knowing that our data is safe and protected."</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="/devid.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>David Johnson</h1>
                            <p className='text-sm text-gray-400'>Marketing Director, Sparkle Brands</p>
                        </div>
                    </div>
                </div>

                <div className='w-[420px] mx-4 my-6 text-left text-lg text-white bg-[#131412] p-8 rounded-xl  border border-[#a0e00d]'>
                    <p>"Saasta has transformed the way our marketing team operates. Its collaborative features and have improved communication and coordination, leading to more successful campaigns and happier clients."</p>
                    <div className='flex items-center mt-5'>
                        <img className="rounded-xl" src="/sarah.webp" alt="Emily" style={{width: '70px', height: '70px'}}/>
                        <div className="ml-4">
                            <h1 className='text-2xl'>Sarah Miller</h1>
                            <p className='text-sm text-gray-400'>Marketing Director at Digital Agency</p>
                        </div>
                    </div>
                </div>
            </Marquee>
        </div>


        <div className='flex flex-col justify-center items-center mx-[5%] lg:mx-auto mt-24 mb-20 lg:w-2/3'>
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


        <div className='flex flex-col lg:w-2/3 w-4/5 mx-auto text-center justify-center items-center mx-[5%] mt-36 mb-32 py-4 px-8 rounded-xl bg-[#131412]'>

            <h1 className='text-[40px] font-semibold mt-8 mb-8'>Ready to Streamline Your Project Management?</h1>
            <p className='text-[18px]'> Join thousands of teams worldwide who trust Saasta to simplify their project workflows and drive success.</p>

            <button className='px-8 py-4 m-10 rounded-3xl bg-[#a0e00d] hover:bg-white text-black font-semibold text-[19px]'>
                <Link to={"/contact"}>
                    Get the Free Template
                </Link>
            </button>
        </div>

    </>
  )
}
