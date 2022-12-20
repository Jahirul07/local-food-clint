import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UserReviewTable from './UserReviewTable';

const UserReview = () => {
    const {user} = useContext(AuthContext)

    const [reviews, setReviews] = useState([])
 

    useEffect( () =>{
        fetch(`https://local-food-server.vercel.app/reviewsubmit?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id =>{
      const proceed = window.confirm('Are you sure to delete this Review?')
      if(proceed){
          fetch(`https://local-food-server.vercel.app/foods/${id}`,{
              method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.deletedCount > 0){
                alert('deleted successfully')
                const remaining = reviews.filter(review => review._id !== id)
                setReviews(remaining)
              }
          })
      }
    }

    return (
        <div>
          {
            reviews.map(review => <UserReviewTable
            key={review._id}
            review= {review}
          handleDelete={handleDelete}
            ></UserReviewTable>)
          }
        </div>
    );
};

export default UserReview;