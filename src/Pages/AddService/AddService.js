import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const AddService = () => {
    const notify = () => toast("Added Product!");
    const handleAdd = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const details = form.details.value;
        const rating = form.rating.value
        const product = {
            name,
            price,
            image,
            details,
            rating

        };
        fetch('http://localhost:5000/product', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged) {
                alert("Product Added");
                form.reset();
              }
        })
        .catch(err => console.error(err));
        
    }
    return (
        <div className='w-6/12 mx-auto my-6'>
            <form onSubmit={handleAdd}>
          <div className="flex flex-col mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Service Name"
              className="input input-bordered input-info w-full mt-4"
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered input-info w-full mt-4"
            />
            <input
              type="text"
              name="image"
              placeholder="Photo Url"
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
              placeholder="Details"
              name="details"
              required
            ></textarea>
            <div className="flex justify-center mt-5">
              <input className="btn" type="submit" onClick={notify} value="Place Your Review" />
              <ToastContainer></ToastContainer>
            </div>
          </div>
        </form>
        </div>
    );
};

export default AddService;