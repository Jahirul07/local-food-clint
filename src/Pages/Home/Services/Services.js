import React, { useEffect, useState } from 'react';
import FoodsCard from '../../Shared/FoodsCard/FoodsCard';

const Services = () => {
    const [foods, setFoods] = useState([]);
    useEffect( () => {
        fetch('localFood.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])
    return (
        <div className='my-20 w-11/12 mx-auto'>
            <h2 className='text-5xl text-center'>Our Food Services</h2>
            <p className='text-center mt-3'>It may range from a plainly cooked burger and fries, to more elaborate <br /> offerings such as "all-you-can-eat" buffets and gourmet platters.</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    foods.map(food => <FoodsCard
                    key={food._id}
                    food = {food}
                    ></FoodsCard>)
                }
            </div>
        </div>
    );
};

export default Services;