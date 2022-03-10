import { useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../utils/api.js";
import Error from "../error-components/Error.jsx";
import { useContext } from "react";
import { UserContext } from "../user-components/UserContext.jsx";


export default function AddNewComment({ isPosting, setIsPosting, setComments }) {
    const [comment, setComment] = useState("");
    const { article_id } = useParams();
    const {loggedInUser} = useContext(UserContext)
    const [error, setError] = useState(null);

  

    const handleClick = (event) => {
        if(!loggedInUser) alert("Please log in to post a comment");
        if(!comment) alert("Please enter your comment");
        event.preventDefault();
        if(loggedInUser && comment) {
        const newComment = {
            username: loggedInUser,
            body: comment
        }
            setIsPosting(true);
            api.addComment(article_id, newComment).then((comment) => {
                setComments((currComments) => {
                    return [comment, ...currComments]
                })
                setComment("");
                setIsPosting(false);
                alert("Your comment has been posted below")
            }).catch((err) => {
                setError('Your comment was not added, please try again.');
            })
        }
    }

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    if (error) {
        return <Error error={error} />
    }

    return (
        <form className="new_comment_submit">
            <label htmlFor="body">Post a new comment here</label>
            <br />
            <textarea className={comment && loggedInUser ? "new_comment_body_valid": "new_comment_body_invalid"}  
                    type="text"
                    rows="10"
                    cols="50"
                    id="new_comment_body"
                    value={comment}
                    name="new_comment_body"
                    onChange={handleChange}
                    required />
            <br />
            <button onClick={handleClick} id="button_post_comment" disabled={isPosting === "true"}>Submit comment</button>
        </form>
    )
}