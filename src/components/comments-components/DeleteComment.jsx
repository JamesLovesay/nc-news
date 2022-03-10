import { useContext } from "react";
import { UserContext } from "../user-components/UserContext.jsx";
import * as api from "../../utils/api.js";
import { useState } from "react";
import Error from "../error-components/Error.jsx";

export default function DeleteComment({ author, comments, setComments, comment_id, commentToDelete, setCommentToDelete }) {
    const [error, setError] = useState(null);
    const {loggedInUser} = useContext(UserContext);

    const handleClick = () => {
        setComments((prevComments) => {
            const removedComment = prevComments.filter((comment) => comment.comment_id === comment_id);
            setCommentToDelete(removedComment)
            const reducedComments = prevComments.filter((comment) => comment.comment_id !== comment_id)
            alert('Comment deleted')
            return reducedComments
        })
        setError(null);
        api.deleteComment(comment_id).catch((err) => {
            setComments([...comments, commentToDelete]);
            setError('Something has gone wrong when deleting your comment. Please try again.');
            setCommentToDelete({});
        });
    }

      if (error) {
        return <Error error={error} />
    }

    return (
        <button type="button" onClick={handleClick} disabled={loggedInUser === "" || author !== loggedInUser} className={loggedInUser !== "" && author === loggedInUser ? "delete_comment_enabled" : "delete_comment_disabled"}>Delete Comment</button>
    )
}