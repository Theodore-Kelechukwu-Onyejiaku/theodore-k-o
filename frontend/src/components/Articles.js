import educative from "../assets/images/educative.png"
import medium from "../assets/images/medium.png"
import dev from "../assets/images/dev.to.png"
import strapi from "../assets/images/strapi.png"
import hashnode from "../assets/images/hashnode.png"

export default function About() {
    return (
        <div className='dark:bg-black dark:bg-opacity-100 px-5 py-10 md:p-10' data-aos="fade-up" data-aos-duration="1500" id='articles'>
            <div className=''>
                <div className='card w-64 mx-auto md:w-fit md:mx-0 my-5'>
                    <span className='font-bold md:text-3xl p-5 text-white w-64 text-center'>Articles</span>
                </div>
                <p className='pt-5 md:pt-20 dark:text-white text-md md:text-xl'>
                    In order to give back to community, share my knowledge and experience, I have written some articles that will help other developers
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4 gap-x-5 gap-y-10">
                    <div className="">
                        <div className="flex justify-start items-center my-3">
                            <img className="rounded mr-3" src={educative} width="40" height="40" alt="educative.io" />
                            <span className="dark:text-white text-2xl font-bold">Educative.io</span>
                        </div>
                        <p className="dark:text-white my-3">Educative Answers is a free web encyclopedia written by devs for devs. Find the answers you need with our short, verified articles that feature executable code, or join the community and become a contributor.</p>
                        <a className="rounded  p-2 border text-white bg-[#ff2fff] dark:border-none font-bold shadow block w-44 text-center">View My Articles</a>
                    </div>

                    <div className="">
                        <div className="flex justify-start items-center">
                            <img className="rounded mr-3" src={medium} width="40" height="40" alt="educative.io" />
                            <span className="dark:text-white text-2xl font-bold">Medium</span>
                        </div>
                        <p className="dark:text-white my-3">Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic.</p>
                        <a className="rounded  p-2 border text-white bg-[#ff2fff] dark:border-none font-bold shadow block w-44 text-center" href="">View My Articles</a>
                    </div>

                    <div className="">
                        <div className="flex justify-start items-center">
                            <img className="rounded mr-3" src={dev} width="40" height="40" alt="educative.io" />
                            <span className="dark:text-white text-2xl font-bold">Dev.to</span>
                        </div>
                        <p className="dark:text-white my-3">DEV Community ‍ ‍ is a community of 965,460 amazing developers. We're a place where coders share, stay up-to-date and grow their careers.</p>
                        <a className="rounded  p-2 border text-white bg-[#ff2fff] dark:border-none font-bold shadow block w-44 text-center" href="https://dev.to/javascriptar">View My Articles</a>
                    </div>

                    <div className="">
                        <div className="flex justify-start items-center">
                            <img className="rounded mr-3" src={strapi} width="40" height="40" alt="educative.io" />
                            <span className="dark:text-white text-2xl font-bold">Strapi</span>
                        </div>
                        <p className="dark:text-white my-3">This program is for Strapi enthusiasts, developers, and content managers who want to contribute to our tutorials and deep dives.</p>
                        <span className="rounded  p-2 border text-white bg-[#ff2fff] dark:border-none font-bold shadow block w-44 text-center" href="">Coming Soon...</span>
                    </div>

                    <div className="">
                        <div className="flex justify-start items-center">
                            <img className="rounded mr-3" src={hashnode} width="40" height="40" alt="educative.io" />
                            <span className="dark:text-white text-2xl font-bold">Hashnode</span>
                        </div>
                        <p className="dark:text-white my-3">Start a blog for free instantly and share your ideas with people in tech, developers, and engineers. Hashnode is a free blogging platform.</p>
                        <a className="rounded  p-2 border text-white bg-[#ff2fff] dark:border-none font-bold shadow block w-44 text-center" href="https://hashnode.com/@JavaScriptar">View My Articles</a>
                    </div>

                </div>
            </div>
        </div>
    )
}
