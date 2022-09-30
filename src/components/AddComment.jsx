import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const AddComment = ({review_id, setComments}) => {
    const [newCommentAuthor, setNewCommentAuthor] = useState("")
    const [newCommentBody, setNewCommentBody] = useState("")
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://be-games-example-api.herokuapp.com/api/users').then(({data}) => setUsers(data.users))
    }, [newCommentAuthor])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://be-games-example-api.herokuapp.com/api/reviews/${review_id}/comments`,
            {
                username: newCommentAuthor,
                body: newCommentBody
            }
        ).then(({data}) => {
            setComments((currComments) => {
                return [data.comment, ...currComments]
            });
            
        })

        setNewCommentAuthor("")
        setNewCommentBody("")
    }

    return (
        <form className="add-comment" onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="newComment">Add your own comment below</label> <br />

            <label htmlFor="comment-author" id="name"> Select user from the dropdown </label> <br />
            <select id="comment-author" value={newCommentAuthor} onChange={(e) => setNewCommentAuthor(e.target.value)}>
                {users.map((user) => {
                    return (
                        <option key={user.username} value={user.username}>{user.username}</option>
                    )
                })}
            </select> <br />

            <label htmlFor="comment-body" id="body">Comment: </label> <br />
            <textarea id="comment-body" value={newCommentBody} onChange={(e) => setNewCommentBody(e.target.value)} required></textarea> <br />
            <button>Add</button>
        </form>
    )
}

export default AddComment;