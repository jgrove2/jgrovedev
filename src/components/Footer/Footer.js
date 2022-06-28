import React from 'react'
import { MdOutlineEmail } from 'react-icons/md';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 footer items-center p-4 bg-neutral text-neutral-content text-white flex flex-col">
                <div className="flex flex-col gap-4 md:place-self-center md:justify-self-end">
                    <div className='flex space-x-4 justify-center'>
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
                    <div className="items-center justify">
                        <p>Copyright © 2022 - All right reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;