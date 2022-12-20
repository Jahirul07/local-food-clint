import React, { useEffect, useState } from 'react';
import NewProductCarrd from './NewProductCarrd';

const NewProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('https://local-food-server.vercel.app/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-20 w-11/12 mx-auto'>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <NewProductCarrd
                    key={product._id}
                    product ={product}
                    ></NewProductCarrd>)
                }
            </div>
        </div>
    );
};

export default NewProduct;