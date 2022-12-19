import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ReviewSubmit = () => {
    const {user} = useContext(AuthContext)
    const handleReview = (event) =>{
        event.preventDefault()
        const form = event.target;
        const fullname = form.name.value;
        const email = user?.email || 'unregisterd';
        const phone = form.phone.value;
        const message = form.message.value;
        const rating = form.rating.value;

        const review = {
            // service: _id,
            // serviceName: name,
            // price,
            customerName: fullname,
            email,
            phone,
            message,
            rating
        }
        fetch('http://localhost:5000/reviewsubmit', {
            method: 'POST',
            headers: {
                'contenttype': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Order Placed')
                form.reset()
            }
        })
        .catch(err => console.error(err))
    }
  return (
    <div>
      <form onSubmit={handleReview}>
        <div className="flex flex-col mx-auto my-24 w-2/4">
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
          <select className="select select-info w-full max-w-xs mt-4" name="rating">
            <option disabled selected>
              Select Your Rating
            </option>
            <option>3</option>
            <option>4</option>
            <option>4.5</option>
            <option>5</option>
          </select>
          <textarea className="textarea h-28 textarea-info mt-4" placeholder="message" name="message" required></textarea>
          <div className="flex justify-center mt-5">
        <input className="btn" type="submit" value='Place Your Review' />
        </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewSubmit;
