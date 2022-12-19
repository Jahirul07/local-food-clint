import React from 'react';
import Image from '../../../assets/pizza/pizza.jpg'
const WhyMe = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto my-28 lg:flex justify-center'>
            <div className='w-6/12 ml-5 justify-center'>
                <img className=' h-80' src={Image} alt="" />
            </div>
            <div className='w-6/12'>
                <h1 className='text-5xl mb-3 font-semibold'>We Provide Good Food <br /> For Your Family!</h1>
                <p>Locally owned and operated, Supo is a neighborhood restaurant offering quality Mexican-Italian fusion food. Every dish is made from scratch and no shortcuts are taken to ensure that our customers receive only the best quality food at an affordable price.</p>
                <br />
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip consequat.</p>
                <div className='mt-10 flex'>
                <input type="text" placeholder="Your Email" className="input input-ghost w-full max-w-xs" />
                <button className="btn btn-outline btn-secondary ml-3">Subscribe</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default WhyMe;