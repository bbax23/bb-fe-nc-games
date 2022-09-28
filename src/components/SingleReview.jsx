import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Review = () => {

    const [review, setReview] = useState({})
    const {review_id} = useParams();

    useEffect(() => {
        axios.get(`https://be-games-example-api.herokuapp.com/api/reviews/${review_id}`).then(({data}) => {
            setReview(data.review)
        })
    }, [review_id])

    return(
        <header>
            <img class="review-img" src={review.review_img_url} alt={`${review.title}`}></img>
            <h1>{review.title}</h1>
                <p>{review.review_body}</p>
                <p>A(n) {review.category} game designed by {review.designer}</p>
                <p>Comments: {review.comment_count}</p>
                <p>Votes: {review.votes} </p>
                <p> Review left by {review.owner} on {review.created_at}</p>
            </header>
    )
}

export default Review;