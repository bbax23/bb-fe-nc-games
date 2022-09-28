import axios from 'axios'
import { useEffect, useState } from 'react';
import {useNavigate, Link} from 'react-router-dom'

const Reviews = ({category}) => {
    const [reviewList, setReviewList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (category === "Categories" || !category) {
        axios.get('https://be-games-example-api.herokuapp.com/api/reviews').then(({data}) => setReviewList(data.reviews))
     } else if(category) {
        navigate(`/${category}`)
     }
    }, [category, setReviewList, navigate])

    return(
        <ul>
            <h2>Reviews</h2>
            {reviewList.map((review) => {
                return (
                    <li key={review.review_id}><Link to={`/review-${review.review_id}`}>
                        <h3>{review.title}</h3></Link> 
                            <p>{review.review_body}</p>
                            <p>Category: {review.category}</p>
                            <p>Comments: {review.comment_count}</p>
                            <p>Votes: {review.votes} </p>
                            <p>{review.created_at}</p>
                    </li>
                )
            })}
        </ul>

    )
}

export default Reviews;