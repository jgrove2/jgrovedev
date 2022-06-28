import React, { useEffect } from 'react';
import pdf from './resume.pdf';
// import { Viewer, SpecialZoomLevel, Worker } from '@react-pdf-viewer/core';

const About = (props) => {
    useEffect(() => {
        document.title = props.title || "";
    }, [props.title]);

    return (
        <div className='min-h-screen'>
            <iframe
                title="file"
                className='h-screen w-screen'
                src={pdf}
            />
        </div>
    );
}

export default About