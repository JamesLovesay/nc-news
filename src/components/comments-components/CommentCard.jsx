import getHumanTime from "../../utils/getHumanTime";
import DeleteComment from "./DeleteComment";

export default function CommentCard({ comments, setComments, comment_id, votes, created_at, author, body, commentToDelete, setCommentToDelete}) {
    return (
        <article className="comment_individual_article">
            <h4>#{comment_id}</h4>
            <h5>Created {getHumanTime(created_at)}</h5>
            <h3>{author}</h3>
            <p>{body}</p>
            <div>{votes} votes for this comment</div>
            <br />
            <DeleteComment comment_id={comment_id} comments={comments} setComments={setComments} author={author} commentToDelete={commentToDelete} setCommentToDelete={setCommentToDelete}/>
            </article>
    )
}