import axios from 'axios'
import { useEffect } from 'react';
const Reviews = ({reviewList, setReviewList}) => {

    useEffect(() => {
        axios.get('https://be-games-example-api.herokuapp.com/api/reviews').then(({data}) => setReviewList(data.reviews))
    }, [setReviewList])

    return(
        <ul>
            <h2>All Reviews</h2>
            {reviewList.map((review) => {
                return (
                    <li key={review.review_id}> 
                    <h3>{review.title}</h3>
                    <p>Category: {review.category}</p> 
                    <p>{review.created_at}</p>
                    <p>Comments: {review.comment_count}{" "}Votes: {review.votes}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default Reviews;