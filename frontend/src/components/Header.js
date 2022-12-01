import { useState, useEffect, useRef, useContext } from "react"
import { RiNotification3Fill, RiSunLine, RiMoonLine } from "react-icons/ri"
import MyAppContext from "../utils/MyAppContext"
import ScrollReveal from 'scrollreveal'
import { TypeAnimation } from 'react-type-animation';
import scrollSmooth from "scroll-smooth"
import ParticlesBg from 'particles-bg'


export default function Header() {
    const [open, setOpen] = useState(false)
    const { theme, setTheme } = useContext(MyAppContext)

    const closeButtonRef = useRef()
    const overlayRef = useRef()
    const overlayThemeBtn = useRef()

    // fixed z-50 w-full
    const handleMenu = () => {
        setOpen(prev => !prev)
    }

    const scrollTo = (elmId) => {
        console.log(elmId)
        scrollSmooth.to(document.querySelector(elmId), {
            duration: 1500,
            offset: -140,
        })

    }

    useEffect(() => {
        window.onscroll = function () { myFunction() };

        var header = document.getElementById("sticky");
        var btns = document.getElementsByClassName("btn")
        var sticky = header.offsetTop;

        function myFunction() {
            ScrollReveal({ reset: true });
            console.log(btns)

            if (window.pageYOffset > sticky) {
                header.classList.add("fixed");
            } else {
                header.classList.remove("fixed");
            }
        }
        document.addEventListener("click", (event) => {
            if (overlayRef.current) {
                if (overlayRef.current.contains(event.target) || closeButtonRef.current.contains(event.target)) {
                    setOpen(prev => prev)
                } else {
                    setOpen(false)
                }
            }
        })
    }, [])

    return (
        <div>
            <div className="overflow-hidden  w-full z-50 top-0">
                <div className="relative">
                    <div className="bg-[#07182E] dark:bg-black top-0 w-full z-50" id="sticky">
                        <div className='mx-5 flex justify-between items-center pt-4 pb-6'>
                            <div className='md:basis-1/4 flex items-center justify-start'>
                                {/* <span className="dark:text-white basis-2/5">Theodore K.O.</span> */}
                                <TypeAnimation
                                    // Same String at the start will only be typed once, initially
                                    sequence={[
                                        'Theodore',
                                        5000,
                                        'Kelechukwu',
                                        1000,
                                        'Onyejiaku'
                                    ]}
                                    speed={50} // Custom Speed from 1-99 - Default Speed: 40
                                    style={{ fontSize: '2em', color: "rgb(255, 48, 255)", fontWeight: 'bolder' }}
                                    wrapper="span" // Animation will be rendered as a <span>
                                    repeat={Infinity} // Repeat this Animation Sequence infinitely
                                />
                            </div>

                            <div className='flex items-center justify-between md:justify-end md:basis-1/4'>
                                {theme == "dark" ? <button className="text-white mr-5 relative z-40" ><RiSunLine onClick={() => { localStorage.theme = "light"; setTheme("light") }} fill={theme == "dark" ? "white" : "black"} className='w-4 h-auto' /></button> :
                                    <button className="text-white mr-5 relative z-40" ><RiMoonLine onClick={() => { localStorage.theme = "dark"; setTheme("dark") }} fill={theme == "dark" ? "black" : "white"} className='w-4 h-auto' /></button>}

                                <div onClick={() => { scrollTo("#about") }} className='mr-5 hidden md:block relative z-40 p-2
                                '>
                                    <a href="#about" className="text-white page-link inner-btn">About</a>
                                </div>
                                <div onClick={() => { scrollTo("#skills") }} className='mr-5 hidden md:block relative z-40 p-2
                                '>
                                    <a href="#skills" className="text-white page-link inner-btn">Skills</a>
                                </div>
                                <div onClick={() => { scrollTo("#projects") }} className='mr-5 hidden md:block relative z-40 p-2
                                '>
                                    <a href="#projects" className="text-white page-link inner-btn">Projects</a>
                                </div>
                                <div onClick={() => { scrollTo("#articles") }} className='mr-5 hidden md:block relative z-40 p-2'>
                                    <a href="#articles" className="text-white page-link inner-btn">Articles</a>
                                </div>
                                <div onClick={() => { scrollTo("#contact") }} className='mr-5 hidden md:block btn relative z-40 p-2'>
                                    <a href="#contact" className="text-white page-link inner-btn">Contact</a>
                                </div>
                                <div className={`menu relative z-40 md:hidden ${open ? "open" : ""}`} ref={closeButtonRef} onClick={handleMenu}>
                                    <span className='menu-bar bg-white'></span>
                                    <span className='menu-bar bg-white'></span>
                                    <span className='menu-bar bg-white'></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${open ? "fixed z-50 h-screen" : "h-fit"}`}>
                        <div ref={overlayRef} className={`overlay fixed h-screen dark:bg-black bg-[#07182E] text-white top-16 md:hidden overflow-hidden z-50 flex flex-col items-center justify-center  ${open ? "open " : " "}`}>
                            <div className="overlay-content relative z-50  mb-64 text-center flex flex-col items-center space-y-5 mt-10">
                                <span className="overlay-content-child relative text-3xl text-white p-2 rounded w-60 dark:text-white cursor-pointer inner-btn" onClick={() => { scrollTo("#about"); handleMenu() }} to="/">About</span>
                                <span className="overlay-content-child relative text-3xl text-white p-2 rounded w-60 dark:text-white cursor-pointer inner-btn" onClick={() => { scrollTo("#skills"); handleMenu() }} to="/">Skills</span>
                                <span className="overlay-content-child relative text-3xl text-white p-2 rounded w-60 dark:text-white cursor-pointer inner-btn" onClick={() => { scrollTo("#projects"); handleMenu() }} to="/">Projects</span>
                                <span className="overlay-content-child relative text-3xl text-white p-2 rounded w-60 dark:text-white cursor-pointer inner-btn" onClick={() => { scrollTo("#articles"); handleMenu() }} to="/">Articles</span>
                                <span className="overlay-content-child relative text-3xl text-white p-2 rounded w-60 dark:text-white cursor-pointer inner-btn" onClick={() => { scrollTo("#contact"); handleMenu() }} to="/">Contact Me</span>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* <ParticlesBg type="thick" bg={true} /> */}
        </div>
    )
}