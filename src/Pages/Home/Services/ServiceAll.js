import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import NewProduct from '../../NewProduct/NewProduct';
import FoodsCard from '../../Shared/FoodsCard/FoodsCard';

const ServiceAll = () => {
    useTitle('Service')
    const [foods, setFoods] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/servicesall')
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [])
    return (
        <div className='my-20 w-11/12 mx-auto'>
            <h2 className='text-5xl text-center'>Our Food Services</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    foods.map(food => <FoodsCard
                    key={food._id}
                    food ={food}
                    ></FoodsCard>)
                }
            </div>
            <NewProduct></NewProduct>
        </div>
    );
};

export default ServiceAll;