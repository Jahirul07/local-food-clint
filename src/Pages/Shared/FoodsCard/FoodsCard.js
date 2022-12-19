import React from "react";
import { Link } from "react-router-dom";

const FoodsCard = ({food}) => {
    const {img, name, rating, price, description} = food;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl my-5">
      <figure>
        <img className="h-50 w-full p-3" src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <h2 className="text-xl text-red-600 font-semibold">Price: ${price}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary"><Link>Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default FoodsCard;
