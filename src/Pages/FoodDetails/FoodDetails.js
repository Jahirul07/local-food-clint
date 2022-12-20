import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  const food = useLoaderData();
  const { _id, img, price, description, name, rating } = food;
  const handleReview = event => {
    event.preventDefault();
    const form = event.target;
    const fullname = form.name.value;
    const email = user?.email || "unregisterd";
    const phone = form.phone.value;
    const message = form.message.value;
    const rating = form.rating.value;

    const review = {
      service: _id,
      serviceName: name,
      price,
      customerName: fullname,
      email,
      phone,
      message,
      rating,
    };
    fetch("https://local-food-server.vercel.app/reviewsubmit", {
      method: "POST",
      headers: {
        'content-type': "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Order Placed");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
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
                <label htmlFor="my-modal-3">
                 Review Submit
                </label>
                {/* <Link htmlFor="my-modal-4" to="/reviewsubmit">Review Submit</Link> */}
              </button>
              <button className="btn btn-primary">
                <Link to="/myreview">View All Your Review</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Review Submit */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div>
        <form onSubmit={handleReview}>
          <div className="flex flex-col mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered input-info w-full mt-4"
              required
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="Email"
              className="input input-bordered input-info w-full mt-4"
              readOnly
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="input input-bordered input-info w-full mt-4"
              required
            />
            <select
              className="select select-info w-full max-w-xs mt-4"
              name="rating"
            >
              <option disabled selected>
                Select Your Rating
              </option>
              <option>3</option>
              <option>4</option>
              <option>4.5</option>
              <option>5</option>
            </select>
            <textarea
              className="textarea h-28 textarea-info mt-4"
              placeholder="message"
              name="message"
              required
            ></textarea>
            <div className="flex justify-center mt-5">
              <input className="btn" type="submit" value="Place Your Review" />
            </div>
          </div>
        </form>
      </div>
        </div>
      </div>      
    </div>
  );
};

export default FoodDetails;
