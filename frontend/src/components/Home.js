import { useEffect, useContext } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'; import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import Projects from "./Projects"
import Skills from "./Skills"
import Articles from "./Articles"
import MyAppContext from '../utils/MyAppContext';
import CursorTrail from "cursor-trails";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

CursorTrail({
    container: document.body,
    images: ["https://cdn.pixabay.com/photo/2016/11/19/21/31/bubble-1841301_1280.png"],
    rate: 0.5,
    size: 5,
    life: 0.5,
    speed: 0.5
});

export default function Home() {
    const {theme} = useContext(MyAppContext)
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={`${theme === "dark" ? "dark": "light"}`}
            />
            <Hero />
            <div className='dark:bg-black'>
                <About />
                <Skills />
                <Projects />
                <Articles />
                <Contact />
            </div>
        </div>
    )
}
