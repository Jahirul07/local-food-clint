import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import UserReviewTable from './UserReviewTable';

const UserReview = () => {
    const {user} = useContext(AuthContext)

    const [reviews, setReviews] = useState([])
 

    useEffect( () =>{
        fetch(`http://localhost:5000/reviewsubmit?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div>
          {
            reviews.map(review => <UserReviewTable
            key={review._id}
            review= {review}
            ></UserReviewTable>)
          }
        </div>
    );
};

export default UserReview;