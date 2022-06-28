import React, { useState, useEffect } from 'react'
import ProjectData from '../components/ProjectCard/ProjectData';


const Projects = (props) => {
    const [items] = useState(ProjectData);
    useEffect(() => {
        document.title = props.title || "";
    }, [props.title]);

    return (
        <div className='min-h-screen'>
            < div className="flex flex-col items-center justify-center" >
                <h1 className="font-extrabold text-[8vw]">Projects</h1>
                <span className="h-1 w-full bg-gray-200 rounded-full lg:w-9/12"></span>
            </div >
            <div className="flex mt-6 flex-wrap items-start ml-4 mr-4">
                {items.map((item) => {
                    const { url, name, desc, id } = item;
                    return (
                        <a key={url} href={url} target="_blank" rel="noreferrer">
                            <div key={id} className="bg-gray-100 p-8 m-2 min-w-10 max-w-[100%] rounded-lg shadow hover:bg-gray-200 items-center justify-around">
                                <h1 key={name} className="text-md font-bold">{name}</h1>
                                <small key={desc} className="">{desc}</small>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    );
}

export default Projects