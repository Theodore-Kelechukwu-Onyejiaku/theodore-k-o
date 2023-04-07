import projects from '../utils/projects'

export default function Projects() {
    return (
        <div  className='overflow-hidden dark:bg-black dark:bg-opacity-100 py-10 md:p-10 px-5 w-full' id='projects'>
            <div className='card-no-bg w-64 mx-auto md:w-fit md:mx-0 my-5'>
                <span className='font-bold md:text-3xl p-5 dark:text-white w-64 text-center'>Projects</span>
            </div>
            <div className='flex flex-col items-center py-10'>
                {projects.map((pro, index) =>
                    <div  key={pro.id} className='w-full md:w-1/2 m-auto'>
                        <p className='dark:text-white py-3 text-2xl font-bold'>{pro.title}</p>
                        <img className='border' alt='project' src={pro.image} />
                        <p className='py-3 '>
                            {pro?.stacks?.map(stack =>
                                <span key={stack.toString()} className='dark:text-white dark:bg-black bg-gray-300 inline-block my-1 p-2 border mr-2 rounded-2xl'>{stack}</span>
                            )}
                        </p>
                        <p className='dark:text-white dark:bg-black py-5'>
                            {pro.description}
                        </p>
                        <p className='py-5'>
                            <a className="rounded  p-2 border text-white bg-[#ff2fff] dark:border-none font-bold shadow px-4 text-center" href={pro.url}>View Project</a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
