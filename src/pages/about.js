import React, { useEffect } from 'react';
import pdf from './resume.pdf';
// import { Viewer, SpecialZoomLevel, Worker } from '@react-pdf-viewer/core';

const About = (props) => {
    useEffect(() => {
        document.title = props.title || "";
    }, [props.title]);

    return (
        <>
            <iframe
                title="file"
                className='h-90v w-screen'
                src={pdf}
            />
        </>
    );
}

export default About