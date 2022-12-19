import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const UserReview = () => {
    const {user} = useContext(AuthContext)

    const [review, setReview] = useState([])
 

    useEffect( () =>{
        fetch(`http://localhost:5000/reviewsubmit?email=${user.email}`)
        .then(res => res.json())
        .then(data => setReview(data))
    }, [user?.email])

    return (
        <div>
            <h1 className='text-4xl'> You have {review.length} Review</h1>
        </div>
    );
};

export default UserReview;