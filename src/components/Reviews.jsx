import axios from 'axios'
import { useEffect, useState } from 'react';
import Categories from './Categories';


const Reviews = ({reviewList, setReviewList}) => {

    const [category, setCategory] = useState('');

    useEffect(() => {
        if(category) {
           axios.get(`https://be-games-example-api.herokuapp.com/api/reviews?category=${category}`).then(({data}) => setReviewList(data.reviews))
        }
        else if (category === "Categories" || !category) {
        axios.get('https://be-games-example-api.herokuapp.com/api/reviews').then(({data}) => setReviewList(data.reviews))
    }}, [category, setReviewList])
    return(
        <section>
        <ul>
            <Categories category={category} setCategory={setCategory}/>
            <h2>Reviews</h2>
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