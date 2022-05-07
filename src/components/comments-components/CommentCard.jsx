import getHumanTime from "../../utils/getHumanTime";
import DeleteComment from "./DeleteComment";
import { UserContext } from "../user-components/UserContext.jsx";
import { useState, useContext } from "react";
import * as api from "../../utils/api.js";

export default function CommentCard({ comments, setComments, comment_id, votes, created_at, author, body, commentToDelete, setCommentToDelete}) {

    const { loggedInUser } = useContext(UserContext);
    const [userVote, setUserVote] = useState(0);
    const [error, setError] = useState(null);

    const handleClick = (incVotes) => {
        setUserVote((currVotes) => {
            return currVotes + incVotes;
        })
        setError(null);
        api.changeCommentVotes(comment_id, incVotes).catch((err) => {
            setUserVote((currVotes) => currVotes - incVotes);
            setError('Your vote was not counted, please try again.');
        });
    }

    return (
        <article className="comment_individual_article">
            <h4>#{comment_id}</h4>
            <h5>Created {getHumanTime(created_at)}</h5>
            <h3>{author}</h3>
            <p>{body}</p>
            <div className="comment_vote_section">
            <button onClick={() => handleClick(-1)} className="comment_vote_button" disabled={userVote === -1 || loggedInUser === author || loggedInUser === ""}>-</button>
            <p>{votes + userVote}</p>
            <button onClick={() => handleClick(1)} className="comment_vote_button" disabled={userVote === 1 || loggedInUser === author || loggedInUser === ""}>+</button>
            </div>
            <DeleteComment comment_id={comment_id} comments={comments} setComments={setComments} author={author} commentToDelete={commentToDelete} setCommentToDelete={setCommentToDelete}/>
            </article>
    )
}