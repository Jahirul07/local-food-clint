import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData();
  const { img, price, description, name, rating } = food;
  return (
    <div className="hero w-4/5 mx-auto my-6">
      <div className="hero-content flex-col lg:flex-row">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="ml-6">
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{description}</p>
          <div className="flex justify-around">
          <p className="text-xl lg:text-3xl text-orange-800 font-semibold">
            Price: ${price}
          </p>
          <p className="text-xl text-sky-700">Rating: {rating}</p>
          </div>
          <div className="flex flex-row-reverse">
            <button className="btn btn-primary ml-6">
              <Link to='/reviewsubmit'>Review Submit</Link>
            </button>
            <button className="btn btn-primary">
              <Link to='/myreview'>View All Your Review</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
