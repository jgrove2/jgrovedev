import React, { useEffect } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin } from 'react-icons/bs';


const Home = (props) => {
    useEffect(() => {
        document.title = props.title || "";
    }, [props.title]);
    return (
        <>
            <div className='flex flex-col items-center justify-center h-80v space-y-2'>
                <img className="bg-gray-800 bg-[center_top_1rem] rounded-full" alt="profile" src={require('./jgrove-logo.png')}></img>
                <h2 className='text-4xl font-bold'>Justin Grove</h2>
                <h3 className='text-md'>CS Student</h3>
                <div className='flex space-x-5 text-gray-800'>
                    <a href='https://www.linkedin.com/in/justinwgrove' target='_blank' rel='noreferrer'>
                        <BsLinkedin size='30' className='hover:text-gray-600' />
                    </a>
                    <a href='https://github.com/jgrove2' target='_blank' rel='noreferrer'>
                        <BsGithub size='30' className='hover:text-gray-600' />
                    </a>
                    <a href='mailto:justin.grove42@gmail.com' target='_blank' rel='noreferrer'>
                        <MdOutlineEmail size='35' className='hover:text-gray-600' />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Home