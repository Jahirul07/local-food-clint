import React, { useEffect, useState } from "react";

const UserReviewTable = ({ review }) => {
  const {_id, serviceName, price, email, service, rating } = review;
  const [reviewService, setReviewService] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/foods/${service}`)
      .then((res) => res.json())
      .then((data) => setReviewService(data));
  }, [service]);

  const handleDelete = id =>{
    const proceed = window.confirm('Are you sure to delete this Review?')
    if(proceed){
        fetch(`http://localhost:5000/foods/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
  }

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <tbody>
          <tr>
            <th></th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="rounded w-28 h-28">
                    {reviewService?.img && <img src={reviewService.img} alt="" />}
                  </div>
                </div>
                <div>
                  <div className="font-bold">{serviceName}</div>
                  <div className="text-sm opacity-50">{email}</div>
                </div>
              </div>
            </td>
            <td>
              Price <br />
              {price}
            </td>
            <td>
              Rating <br />
              {rating}
            </td>
            <th>
              <button className="btn btn-ghost btn-xs">Update</button>
            </th>
            <th>
              <button onClick={() =>handleDelete(_id)} className="btn">X</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserReviewTable;
