import React from 'react'

const Home = () => {
    return (
        <>
            <div className='flex flex-col items-center justify-center h-80v'>
                <img className="" alt="profile" src={require('./jgrove-logo.png')}></img>
                <h2>Justin Grove</h2>
                <h3>Computer Science Student w/ Minor in Math</h3>
                <h3>at UConn</h3>
            </div>
        </>
    );
}

export default Home