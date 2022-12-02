import { useContext } from 'react'
import MyAppContext from '../utils/MyAppContext'
import { BsTwitter, BsGithub, BsLinkedin, BsStackOverflow, BsMedium } from "react-icons/bs"

export default function Footer() {
    const { theme } = useContext(MyAppContext)

    return (
        <div className='relative bottom-0 dark:bg-black'>
            <div className='p-4 text-center '>
                <p className='text font-thin text-gray-400 mx-10 border-t-2 border-gray-800 pt-10'>© Theodore Kelechukwu Onyejiaku</p>
                <p className='text font-thin text-gray-400'>Rememeber that <strong>"life is like a blink of an eye"</strong></p>
                <div className='flex justify-center space-x-4 my-4'>
                    <a href='https://github.com/Theodore-Kelechukwu-Onyejiaku'><BsGithub size={30} fill={`${theme === "dark" ? "white" : "black"}`} className='' /></a>
                    <a href='https://twitter.com/JavaScriptar'><BsTwitter size={30} fill="#00acee" className='text-white' /></a>
                    <a href='https://www.linkedin.com/in/theodore20151014166/'><BsLinkedin size={30} fill="#0072b1" className='text-white' /></a>
                    <a href='https://stackoverflow.com/users/11837371/onyejiaku-theodore-kelechukwu'><BsStackOverflow size={30} fill="#ef8236" className='text-white' /></a>
                    <a href='https://medium.com/@theodoreonyejiaku'><BsMedium size={30} fill={`${theme === "dark" ? "white" : "black"}`} /></a>
                </div>
            </div>
        </div>
    )
}
