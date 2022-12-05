import { useContext } from 'react'
import { BsTwitter, BsGithub, BsLinkedin, BsStackOverflow, BsMedium } from "react-icons/bs"
import { GiArrowDunk } from "react-icons/gi"
import MyAppContext from '../utils/MyAppContext'
import { TypeAnimation } from 'react-type-animation';
import kc from "../assets/images/kc.png"
import ParticlesBg from "particles-bg";
import scrollSmooth from "scroll-smooth"



export default function Hero() {
    const scrollTo = (elmId) => {
        console.log(elmId)
        scrollSmooth.to(document.querySelector(elmId), {
            duration: 1500,
            offset: -140,
        })

    }
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
                                <a href='https://github.com/Theodore-Kelechukwu-Onyejiaku'><BsGithub size={30} fill={`${theme === "dark" ? "white" : "black"}`} className='' /></a>
                                <a href='https://twitter.com/JavaScriptar'><BsTwitter size={30} fill="#00acee" className='text-white' /></a>
                                <a href='https://www.linkedin.com/in/theodore20151014166/'><BsLinkedin size={30} fill="#0072b1" className='text-white' /></a>
                                <a href='https://stackoverflow.com/users/11837371/onyejiaku-theodore-kelechukwu'><BsStackOverflow size={30} fill="#ef8236" className='text-white' /></a>
                                <a href='https://medium.com/@theodoreonyejiaku'><BsMedium size={30} fill={`${theme === "dark" ? "white" : "black"}`} /></a>
                            </div>
                            <h1 className='dark:text-white text-black font-bold text-2xl md:text-3xl my-3'>Theodore Kelechukwu Onyejiaku</h1>
                            <p className='md:text-2xl font-thin dark:text-white text-black'>Theodore is a Software Engineer with experience working with TypeScript, ReactJs, ExpressJs, NodeJs, MongoDB, Postgres, AWS, NextJs, ReactNative and Tailwind CSS </p>
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
            <div className='absolute bottom-1/4 md:bottom-32 flex justify-center w-full'>
                <div className="scrolldown bg-[#07182E]" onClick={() => { scrollTo("#about") }}>
                    <div className="chevrons">
                        <div className="chevrondown"></div>
                        <div className="chevrondown"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}