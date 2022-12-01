import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'; import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import Projects from "./Projects"
import Skills from "./Skills"
import Articles from "./Articles"
import CursorTrail from "cursor-trails";

CursorTrail({
    container: document.body,
    images: ["https://cdn.pixabay.com/photo/2016/11/19/21/31/bubble-1841301_1280.png"],
    rate: 0.5,
    size: 40,
    life: 1.5,
    speed: 1.2
});

export default function Home() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
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
