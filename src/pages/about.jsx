import React from 'react'
import ShortTag from '../components/ShortTag'
import { GrTechnology } from "react-icons/gr";
import { IoMdShare } from "react-icons/io"
import { BiSolidCustomize } from "react-icons/bi";
import Marquee from 'react-fast-marquee';
import ShortTagMid from '../components/ShortTagMid';
import { FaFacebook } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';


export default function About() {
  return (
    <>
        <div className='w-[80%] my-16 mx-auto text-center'>
            <h1 className='text-[40px] lg:text-[50px] font-semibold'><span className='text-[#a0e00d]'>Empowering</span> Teams with Innovative Project <span className='text-[#80c920]'>Management</span> Solutions</h1>
            <p className='text-lg md:text-xl my-6 mx-[10%]'>Discover Our Story, Mission, and Commitment to Streamlining Project Workflows</p>
        </div>

        <div className='flex flex-col mx-10 mt-32 mb-24'>
            <div className='flex flex-col md:flex-row justify-between text-center md:text-left mx-auto'>
                <div id='a' className='md:w-[50%] mx-10 my-5 z-[-1] intersect-view intersect-scroll'>
                   <div className='flex'>
                       <ShortTag tagName={"About US"}/>
                   </div>
                   <h1 className='text-[40px] my-5 lg:text-5xl font-semibold'><span className='text-[#a0e00d]'>Revolutionizing</span>  Project Management with Saasta</h1>
                    <button className='bg-[#a0e00d] rounded-3xl px-4 py-3 text-black hover:bg-white my-5'>
                        <Link to={"/contact"}>
                            Contact US
                        </Link>
                    </button>
                </div>
                <div id='b' className='md:w-[50%] text-lg mx-10 my-5'>
                    <p>
                        At Saasta, our journey began with a simple but powerful idea: to revolutionize project management for teams of all sizes. Frustrated by the complexities and limitations of existing solutions, we set out to create a platform that would empower teams to collaborate more effectively, streamline workflows, and drive success. <br /><br />
                        With a team of passionate developers and project management experts, we embarked on a journey of innovation and iteration. We listened to the needs of our users, gathered feedback, and continuously refined our platform to meet the evolving demands of modern businesses. <br /><br />
                        Today, Saasta stands as a testament to our commitment to excellence and our relentless pursuit of improvement. We take pride in providing a solution that not only meets the needs of our users but exceeds their expectations. As we continue to grow and evolve, our dedication to empowering teams with innovative project management solutions remains unwavering. <br /><br />
                    </p>
                </div>
            </div>
            <img src='/aboutPageMain.webp' className='rounded-3xl'/>
        </div>


        <div className='flex flex-col md:flex-row justify-between text-center md:text-left mx-auto mt-44'>
            <div className='md:w-[50%] mx-10 mb-16 z-[-1] intersect-view intersect-scroll'>
               <div className='flex'>
                   <ShortTag tagName={"Achievements"}/>
               </div>
               <h1 className='text-[40px] my-5 lg:text-5xl font-semibold'>Highlight <span className='text-[#a0e00d]'>Achievements</span> by the <span className='text-[#a0e00d]'>numbers</span></h1>
               <p className='text-lg md:text-xl my-6'>Empowering Teams, Driving Success: Saasta's Impact in Numbers</p>
                <div className='grid grid-cols-2'>
                    <div className='my-5'>
                        <h1 className='text-4xl font-semibold'>500+</h1>
                        <p className='text-lg'>Projects Completed</p>     
                    </div>
                    <div className='my-5'>
                        <h1 className='text-4xl font-semibold'>500+</h1>
                        <p className='text-lg'>Projects Completed</p>     
                    </div>
                    <div className='my-5'>
                        <h1 className='text-4xl font-semibold'>500+</h1>
                        <p className='text-lg'>Projects Completed</p>     
                    </div>
                    <div className='my-5'>
                        <h1 className='text-4xl font-semibold'>500+</h1>
                        <p className='text-lg'>Projects Completed</p>     
                    </div>
                </div> 
            </div>
            <div className='md:w-[50%] text-lg mx-10 my-5'>
                <img src="/about1.webp" alt="" className='rounded-3xl h-full'/>
            </div>
        </div>


        <div className='flex flex-col text-center justify-center items-center mx-[5%] mt-40 mb-40 overflow-hidden'>
            <Marquee autoFill className='z-[-1]'>
                <img style={{width: "150px"}} className='mx-16 opacity-50' src="/asana.png" alt="asana" />
                <p className='text-3xl opacity-50'>|</p>
                <img style={{width: "150px"}} className='mx-16 opacity-50' src="/classpass.png" alt="asana" />
                <p className='text-3xl opacity-50'>|</p>
                <img style={{width: "150px"}} className='mx-16 opacity-50' src="/afterpay.png" alt="asana" />
                <p className='text-3xl opacity-50'>|</p>
                <img style={{width: "150px"}} className='mx-16 opacity-50' src="/hotjar.png" alt="asana" />
                <p className='text-3xl opacity-50'>|</p>
                <img style={{width: "150px"}} className='mx-16 opacity-50' src="/maze.png" alt="asana" />
                <p className='text-3xl opacity-50'>|</p>
            </Marquee>
        </div>



        <div className='mt-44'>
            <div className='flex flex-col text-center justify-center items-center mx-[5%] lg:mx-auto mt-16'>
                    <ShortTagMid tagName={'Our Values'}/>
                    <div className='md:w-[60%] sm:w-[80%] my-5'>
                        <h1 className='text-[40px] lg:text-6xl font-semibold'>Delivering <span className='text-[#a0e00d]'>Excellence</span> in project <span className='text-[#80c920]'>Management</span></h1>
                    </div>
            </div>

            <div className='flex flex-col md:grid md:grid-cols-3 md:gap-10 text-center justify-space-around items-center mx-[5%] lg:mx-20 mt-10 mb-20'>
                <div className='mx-2 my-5'>
                    <GrTechnology color='#a0e00d' size={"3rem"} className='mb-5 mx-auto'/>
                    <h1 className='text-4xl font-semibold'>Intuitive Interface</h1>
                    <p className='lg:text-lg mt-3'>Saasta's user-friendly interface makes it easy for teams to navigate and utilize its features without extensive training, enhancing productivity from day one.</p>
                </div>      
                <div className='mx-2 my-5'>
                    <IoMdShare color='#a0e00d' size={"3rem"} className='mb-5 mx-auto'/>
                    <h1 className='text-4xl font-semibold'>Seamless Collaboration</h1>
                    <p className='lg:text-lg mt-3'>With real-time communication tools and centralized file sharing, Saasta facilitates seamless collaboration among team members, regardless of their location</p>
                </div>      
                <div className='mx-2 my-5'>
                    <BiSolidCustomize color='#a0e00d' size={"3rem"} className='mb-5 mx-auto'/>
                    <h1 className='text-4xl font-semibold'>Flexible Customizatio</h1>
                    <p className='lg:text-lg mt-3'>ailor Saasta to suit your team's unique workflows with customizable task lists, project templates, and reporting tools, providing a personalized experience</p>
                </div>      
            </div>
        </div>


        <div className='mt-44'>
            <div className='flex flex-col text-center justify-center items-center mx-[5%] lg:mx-auto mt-32 mb-10'>
                <ShortTagMid tagName={'Teams'}/>
                <div className='md:w-[60%] sm:w-[80%] my-5'>
                    <h1 className='text-[40px] lg:text-6xl font-semibold'>Introduce our <span className='text-[#a0e00d]'>team</span></h1>
                </div>
            </div>

            <div className='md:grid md:grid-cols-3 md:gap-x-4 md:mx-10'>
                <div className='flex flex-col items-center justify-center text-center mx-auto my-10 w-[350px] md:w-full'>
                    <img src="/michel.webp" alt="" width={"70px"} height={"70px"} className='rounded-[50px]'/>
                    <h1 className='text-2xl mt-3'>John Doe</h1>
                    <h2 className='text-[19px] mb-2'>CEO and Co-Founder</h2>
                    <p>John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.</p>
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
                <div className='flex flex-col items-center justify-center text-center mx-auto my-10 w-[350px] md:w-full'>
                    <img src="/emily.webp" alt="" width={"70px"} height={"20px"} className='rounded-[50px]'/>
                    <h1 className='text-2xl mt-3'>Emily Smith</h1>
                    <h2 className='text-[19px] mb-2'>Product Manager</h2>
                    <p>John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.</p>
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
                <div className='flex flex-col items-center justify-center text-center mx-auto my-10 w-[350px] md:w-full'>
                    <img src="/sarah.webp" alt="" width={"70px"} height={"20px"} className='rounded-[50px]'/>
                    <h1 className='text-2xl mt-3'>Michael Johnson</h1>
                    <h2 className='text-[19px] mb-2'>Michael Johnson</h2>
                    <p>John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.</p>
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
                <div className='flex flex-col items-center justify-center text-center mx-auto my-10 w-[350px] md:w-full'>
                    <img src="/michel.webp" alt="" width={"70px"} height={"20px"} className='rounded-[50px]'/>
                    <h1 className='text-2xl mt-3'>Sarah Miller</h1>
                    <h2 className='text-[19px] mb-2'>Marketing Director</h2>
                    <p>John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.</p>
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
                <div className='flex flex-col items-center justify-center text-center mx-auto my-10 w-[350px] md:w-full'>
                    <img src="/sarah.webp" alt="" width={"70px"} height={"70px"} className='rounded-[50px]'/>
                    <h1 className='text-2xl mt-3'>David Thompson</h1>
                    <h2 className='text-[19px] mb-2'>Head of Customer Success</h2>
                    <p>John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.</p>
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
                <div className='flex flex-col items-center justify-center text-center mx-auto my-10 w-[350px] md:w-full'>
                    <img src="/emily.webp" alt="" width={"70px"} height={"20px"} className='rounded-[50px]'/>
                    <h1 className='text-2xl mt-3'>Smith John</h1>
                    <h2 className='text-[19px] mb-2'>Product Manager</h2>
                    <p>John is a seasoned entrepreneur with over a decade of experience in the tech industry. As CEO and co-founder of Saasta.</p>
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
            </div>
        </div>


        <div className='flex flex-col justify-center items-center mx-[5%] lg:mx-auto mt-32 mb-20'>
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


        <div className='flex flex-col lg:w-2/3 w-3/4 mx-auto text-center justify-center items-center mx-[5%] mt-44 mb-32 py-4 px-8 rounded-xl bg-[#131412]'>

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
