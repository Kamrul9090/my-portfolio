import React, { useState } from 'react';

const Projects = () => {
    const [projectData, setProjectData] = useState([]);
    fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjectData(data))
    return (
        <div className='mt-20 text-center'>
            <h1 className=' text-4xl font-thin uppercase my-5'>My Projects</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 text-center'>
                {
                    projectData.map(project => <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={project.picture} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{project.name}</h2>
                            <p>{project.description}</p>
                            <div className="card-actions">
                                <button className="btn btn-outline btn-warning">Details</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;