import React from 'react';
import { Link } from 'react-router-dom';

const NewProductCarrd = ({product}) => {
    const {_id,name, image, price, details} = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-5">
      <figure>
        <img className="h-50 w-full p-3" src={image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <h2 className="text-xl text-red-600 font-semibold">Price: ${price}</h2>
        <p>
          {details.length > 200 ? (
            <>{details.slice(0, 100) + "..."} <Link to={`/foods/${_id}`}>Details</Link></>
          ) : (
            <span>{details}</span>
          )}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <Link to={`/foods/${_id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
    );
};

export default NewProductCarrd;