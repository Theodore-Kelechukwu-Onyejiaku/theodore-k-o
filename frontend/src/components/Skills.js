import React from 'react'
import nextIcon from "../assets/images/next.png"
import reactIcon from "../assets/images/react.png"
import nodeIcon from "../assets/images/node.png"
import reactNativeIcon from "../assets/images/react-native.png"
import mongoDBIcon from "../assets/images/mongodb.png"
import typeScript from "../assets/images/typescript2.png"
import ParticlesBg from 'particles-bg'

export default function Skills() {
    return (
        <div className='overflow-hidden dark:bg-black dark:bg-opacity-100 py-10 md:p-10' id='skills'>
            <div className='card-no-bg w-64 mx-auto md:w-fit md:mx-0 my-5'>
                <span className='font-bold md:text-3xl p-5 dark:text-white w-64 text-center'>Skills</span>
            </div>
            <div className='grid grid-cols-2 gap-y-10 md:grid-cols-4 mx-5 mt-20 relative'>
                <div className='relative overflow-hidden group flex flex-col justify-center items-center  shadow-lg top-0 hover:-top-10 transition-all ease-in duration-500'>
                    <div className='relative z-40'>
                        <p className='dark:text-white'>TypeScript</p>
                        <img className='' src={typeScript} />
                    </div>
                    <div className='absolute group-hover:top-0 transition-all duration-100 top-80 h-full'>
                        <ParticlesBg type="tadpole" bg={{
                            position: "relative",
                            zIndex: 0,
                            color: "blue",
                            width: "100%",
                        }} />
                    </div>

                </div>
                <div className='relative overflow-hidden group flex flex-col justify-center items-center  shadow-lg top-0 hover:-top-10 transition-all ease-in duration-500'>
                    <div className='relative z-40'>
                        <p className='dark:text-white'>NextJs</p>
                        <img className='brightness-200 bg-white' src={nextIcon} />
                    </div>
                    <div className='absolute group-hover:top-0 transition-all duration-100 top-80 h-full'>
                        <ParticlesBg type="tadpole" bg={{
                            position: "relative",
                            zIndex: 0,
                            width: "100%",
                        }} />
                    </div>

                </div>
                <div className='relative overflow-hidden group flex flex-col justify-center items-center  shadow-lg top-0 hover:-top-10 transition-all ease-in duration-500'>
                    <div className='relative z-40'>
                        <p className='dark:text-white'>ReactJs</p>
                        <img className='brightness-200 bg-white' src={reactIcon} />
                    </div>
                    <div className='absolute group-hover:top-0 transition-all duration-100 top-80 h-full'>
                        <ParticlesBg type="tadpole" bg={{
                            position: "relative",
                            zIndex: 0,
                            width: "100%",
                        }} />
                    </div>

                </div>
                <div className='relative overflow-hidden group flex flex-col justify-center items-center  shadow-lg top-0 hover:-top-10 transition-all ease-in duration-500'>
                    <div className='relative z-40'>
                        <p className='dark:text-white'>NodeJs</p>
                        <img className='brightness-200 bg-white' src={nodeIcon} />
                    </div>
                    <div className='absolute group-hover:top-0 transition-all duration-100 top-80 h-full'>
                        <ParticlesBg type="tadpole" bg={{
                            position: "relative",
                            zIndex: 0,
                            width: "100%",
                        }} />
                    </div>
                </div>
                <div className='relative overflow-hidden group flex flex-col justify-center items-center  shadow-lg top-0 hover:-top-10 transition-all ease-in duration-500'>
                    <div className='relative z-40'>
                        <p className='dark:text-white'>ReactNative</p>
                        <img className=' bg-white' src={reactNativeIcon} />
                    </div>
                    <div className='absolute group-hover:top-0 transition-all duration-100 top-80 h-full'>
                        <ParticlesBg type="tadpole" bg={{
                            position: "relative",
                            zIndex: 0,
                            width: "100%",
                        }} />
                    </div>

                </div>
                <div className='relative overflow-hidden group flex flex-col justify-center items-center  shadow-lg top-0 hover:-top-10 transition-all ease-in duration-500'>
                    <div className='relative z-40'>
                        <p className='dark:text-white'>MongoDB</p>
                        <img className=' bg-white' src={mongoDBIcon} />
                    </div>
                    <div className='absolute group-hover:top-0 transition-all duration-100 top-80 h-full'>
                        <ParticlesBg type="tadpole" bg={{
                            position: "relative",
                            zIndex: 0,
                            width: "100%",
                        }} />
                    </div>

                </div>
                {/* <ParticlesBg type="color" bg={{
                    position: "absolute",
                    zIndex: 0,
                    top: 0,
                    width: "100%",
                }} /> */}
            </div>

        </div>
    )
}
