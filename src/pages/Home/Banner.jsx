import React from 'react';
import banner from '../../assets/banner/banner.png'
import pdfFile from '../../assets/pdf/resume.pdf'
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="w-3/4 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold font-mono">Hi, <span className='text-orange-600'>I am Kamrul Hasan</span></h1>
                    <h1 className="text-3xl font-bold">Web developer</h1>
                    <p className="py-6">I am a Junior Front-end developer.I am giving all my information on this site. Check My site to know about me.</p>
                    <a href={pdfFile}><button className="btn btn-outline btn-warning">Download Resume</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;