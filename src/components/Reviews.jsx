import axios from 'axios'
import { useEffect } from 'react';


const Reviews = ({reviewList, setReviewList}) => {

    useEffect(() => {
        axios.get('https://be-games-example-api.herokuapp.com/api/reviews?cate').then(({data}) => setReviewList(data.reviews))
    }, [])

    return(
        <section>
        <ul>
            <h2>All Reviews</h2>
            {reviewList.map((review) => {
                return (
                    <li key={review.review_id}> 
                        <h3>{review.title}</h3>
                            <p>{review.review_body}</p>
                            <p>Category: {review.category}</p>
                            <p>Comments: {review.comment_count}</p>
                            <p>Votes: {review.votes} </p>
                            <p>{review.created_at}</p>
                    </li>
                )
            })}
        </ul>
        </section>
    )
}

export default Reviews;