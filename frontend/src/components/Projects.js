import projects from '../utils/projects'

export default function Projects() {
    const animations = ['fade-up', 'fade-up-right', 'fade-up-left', 'zoom-in-down', 'zoom-in', 'flip-down', 'slide-right', 'zoom-out-right'];
    return (
        <div data-aos="fade-up" data-aos-duration="1500" className='overflow-hidden dark:bg-black dark:bg-opacity-100 py-10 md:p-10 px-5 w-full' id='projects'>
            <div className='card w-64 mx-auto md:w-fit md:mx-0 my-5'>
                <span className='font-bold md:text-3xl p-5 text-white w-64 text-center'>Projects</span>
            </div>
            <div className='flex flex-col items-center py-10'>
                {projects.map(pro =>
                    <div key={pro.id} className='w-full md:w-1/2 m-auto'>
                        <p className='dark:text-white py-3'>{pro.title}</p> 
                        <img className='border' src={pro.image} />
                        <p className='py-3 '>
                            {pro?.stacks.map(stack =>
                                <span key={stack.toString()} className='dark:text-white dark:bg-black bg-gray-300 inline-block my-1 p-2 border mr-2 rounded-2xl'>{stack}</span>
                            )}
                        </p>
                        <p className='dark:text-white dark:bg-black py-5'>
                            {pro.description.substring(0, 200)}...
                        </p>
                        <p className='py-5'>
                            <a className="rounded  p-2 border text-white bg-[#ff2fff] dark:border-none font-bold shadow w-30 text-center" href={pro.url}>Visit</a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
