import React from 'react';
import Image from '../../../assets/about/about1.png'


const About = () => {
    return (
        <div className='w-11/12 mx-auto my-28 lg:flex justify-center'>
            <div className='w-6/12'>
                <h1 className='text-5xl mb-3 font-semibold'>About Our Story</h1>
                <p>A fast food restaurant is a hurried and usually casual type of institution in which food is sold for carryout or mobile consumption. It may range from a plainly cooked burger and fries, to more elaborate offerings such as "all-you-can-eat" buffets and gourmet platters.</p>
                <br />
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip consequat.</p>
            </div>
            <div className='w-6/12 ml-5 justify-center'>
                <img className=' h-80' src={Image} alt="" />
            </div>
        </div>
    );
};

export default About;