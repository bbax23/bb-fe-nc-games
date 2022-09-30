import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import AddComment from "./AddComment"

const Comments = ({review_id}) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        axios.get(`https://be-games-example-api.herokuapp.com/api/reviews/${review_id}/comments`).then(({data}) => {
            setComments(data.comments)
        })
    }, [review_id])

    return (
        <>
        <ul>
            <h2>Comments</h2>
            <AddComment review_id={review_id} setComments={setComments} />
            {comments.map((comment) => {
                return (
                    <li key={comment.comment_id}>
                        <h3>{comment.author} on {comment.created_at}</h3>
                        <p>{comment.body}</p>
                        <p>Votes: {comment.votes}</p>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Comments