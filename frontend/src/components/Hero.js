import { useContext, useEffect } from 'react'
import { BsTwitter, BsGithub, BsLinkedin, BsStackOverflow, BsMedium } from "react-icons/bs"
import { GiArrowDunk } from "react-icons/gi"
import MyAppContext from '../utils/MyAppContext'
import { TypeAnimation } from 'react-type-animation';
import kc from "../assets/images/kc.png"
import ParticlesBg from "particles-bg";

export default function Hero() {
    const { theme } = useContext(MyAppContext)
    return (
        <div className='hero bg-transparent content  md:flex justify-between items-center dark:bg-transparent'>
            <ParticlesBg type="thick" bg={true} />
          
            <div className='hero-image h-full' data-aos="fade-right" data-aos-duration="3000">
                <img src={kc} alt="profile" className='object-contain h-screen absolute -top-28 md:-top-16 mx-auto w-full' />
                <div className='hero-content h-full md:h-1/2 p-5'>
                    <div className='md:border-none bg-opacity-90' data-aos="fade-left" data-aos-duration="3000">
                        <div className='card  p-5' data-aos="fade-left" data-aos-duration="3000">
                            <div className='flex space-x-4'>
                                <BsGithub size={30} fill="white" className='text-white  brightness-200' />
                                <BsTwitter size={30} fill="#00acee" className='text-white' />
                                <BsLinkedin size={30} fill="#0072b1" className='text-white' />
                                <BsStackOverflow size={30} fill="#ef8236" className='text-white' />
                                <BsMedium size={30} className='text-white' />
                            </div>
                            <h1 className='dark:text-white text-black font-bold md:text-3xl my-3'>Theodore Kelechukwu Onyejiaku</h1>
                            <p className='md:text-2xl font-thin dark:text-white text-black'>Theodore is a Software Engineer with experience working with TypeScript, ReactJs, ExpressJs, NodeJs, NextJs, ReactNative and Tailwind CSS </p>
                            <TypeAnimation
                                // Same String at the start will only be typed once, initially
                                sequence={[
                                    'TypeScript',
                                    1000,
                                    'NextJs',
                                    1000,
                                    'Nodejs',
                                    1000,
                                    'ReactJs',
                                    1000,
                                ]}
                                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                                style={{ fontSize: '2em', color: "rgb(255, 48, 255)", fontWeight: 'bolder' }}
                                wrapper="span" // Animation will be rendered as a <span>
                                repeat={Infinity} // Repeat this Animation Sequence infinitely
                            />
                        </div>

                    </div>
                </div>
            </div>

            <p className='absolute bottom-56 md:bottom-32 w-full flex justify-center'><GiArrowDunk fill={theme === "dark" ? "white" : "black"} className='animate-bounce border text-5xl p-2 rounded-full bg-black bg-opacity-10' /></p>
        </div>
    )
}