import axios from 'axios'
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom'
import Categories from './Categories';
import Nav from './Nav';

const Reviews = ({category, setCategory}) => {
    const [reviewList, setReviewList] = useState([]);
    const {category_name} = useParams()

    useEffect(() => {

        if(category_name){
            axios.get(`https://be-games-example-api.herokuapp.com/api/reviews?category=${category_name}`).then(({data}) => {
                setReviewList(data.reviews)
            })
        }
        else {
        axios.get('https://be-games-example-api.herokuapp.com/api/reviews').then(({data}) => setReviewList(data.reviews))
     }
    }, [category, category_name])

    return(
        <>
        <Nav category={category} setCategory={setCategory} />
        <Categories category={category_name} setCategory={setCategory} />
        <ul>
            <h2>Reviews</h2>
            {reviewList.map((review) => {
                return (
                    <li key={review.review_id}><Link to={`/reviews/${review.review_id}`}>
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
        </>
    )
}

export default Reviews;