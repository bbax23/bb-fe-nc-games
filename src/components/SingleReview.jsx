import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import Errorpage from "./Errorpage";
import Nav from "./Nav";

const Review = () => {

    const [error, setError] = useState(null)
    const [review, setReview] = useState({})
    const {review_id} = useParams();

    useEffect(() => {
        axios.get(`https://be-games-example-api.herokuapp.com/api/reviews/${review_id}`).then(({data}) => {
            setReview(data.review)
        }).catch((err) => {
            setError({err})
        })
    }, [review_id])

    const voteOnReview = () => {

        setReview((review) => {
            return {...review, votes: review.votes + 1}
            
        })
        const reqBody = {
            inc_votes: 1,
        };
        axios.patch(`https://be-games-example-api.herokuapp.com/api/reviews/${review_id}`, reqBody).then(({data}) => {
        }).catch((err) => {
            setError("Try again later")
            setReview((review) => {
                return error, {...review, votes: review.votes - 1}
            })
        })
    }

    if(error){
        return <Errorpage />
    } else {
    return(
        <>
        <Nav />
        <header>
            <img className="review-img" src={review.review_img_url} alt={`${review.title}`}></img>
            <h1>{review.title}</h1>
                <p>{review.review_body}</p>
                <p>A(n) {review.category} game designed by {review.designer}</p>
                <p>Comments: {review.comment_count}</p>
                <p>Votes: {review.votes}<button onClick={() => voteOnReview(review_id)}>
                                    <span aria-label="votes for this review">▲</span>
                                    </button></p>
                <p> Review left by {review.owner} on {review.created_at}</p>
            </header>
            <Comments review_id={review_id}/>
            </>
    )
}}


export default Review;