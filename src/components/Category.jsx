import axios from 'axios'
import { useState, useEffect} from 'react'
import {useParams, useNavigate, Link} from 'react-router-dom'

const Category = ({category}) => {
    const [reviewsByCateg, setReviewsByCateg] = useState([])
    const {category_name} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://be-games-example-api.herokuapp.com/api/reviews?category=${category_name}`).then(({data}) => {
            setReviewsByCateg(data.reviews)
        })
    }, [category_name, setReviewsByCateg])

    useEffect(() => {
        if(category === "Categories" || !category) navigate('/')
        else if(category)  navigate(`/${category}`)
        
    }, [category, navigate])

    return(
        <ul>
            {reviewsByCateg.map((review) => {
                return(
                 <li key={review.review_id}><Link to={`/review-${review.review_id}`}>
                 <h3>{review.title}</h3></Link> 
                     <p>{review.review_body}</p>
                     <p>Category: {review.category}</p>
                     <p>Comments: {review.comment_count}</p>
                     <p>Votes: {review.votes} </p>
                     <p>{review.created_at}</p>
             </li>)
        })}
        </ul>
    )
}

export default Category;