import { useEffect, useState } from "react";
import * as api from "../../utils/api.js";
import Error from '../error-components/Error.jsx'
import {Link} from "react-router-dom";
import { useParams } from "react-router-dom";
import CommentsList from "../comments-components/CommentsList.jsx";
import CollapseWrapper from "../comments-components/CollapseWrapper.jsx";
import { useContext } from "react";
import { UserContext } from "../user-components/UserContext.jsx";
import AddNewComment from "../comments-components/AddNewComment.jsx";

export default function SingleArticle() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { topic, article_id } = useParams();
    const [comments, setComments] = useState([])
    const [article, setArticle] = useState({});
    const [votes, setVotes] = useState(0)
    const {loggedInUser} = useContext(UserContext)
    const [isPosting, setIsPosting] = useState(false);
    const [commentToDelete, setCommentToDelete] = useState({});

    const handleClick = (incVotes) => {
        setVotes((currVotes) => {
            return currVotes + incVotes;
        })
        setError(null);
        api.changeVotes(article_id, incVotes).catch(() => {
        setVotes((currVotes) => currVotes - incVotes);
        setError('Your vote was not counted, please try again.');
        });
    }

    useEffect(() => {
        setIsLoading(true);
        api.getArticle(article_id).then((article) => {
            setArticle(article)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err.message);
        })
    }, [article_id, commentToDelete])

    if (error) {
        return <Error error={error} />
    }

    if(isLoading) return <p> Loading....</p>  
    return (
        <>
            <section className="single_article_display">
            <h3 className="articlecard_title">{article.title}</h3>
            <h4 className="articlecard_author">{article.author}</h4>
            <h5 className="articlecard_topic">{topic}</h5>
            <p className="single_article_body">{article.body}</p>
            <p className="articlecard_votes">Votes {article.votes + votes}</p>
            <button onClick={() => handleClick(1)} className="article_vote_button" disabled={votes === 1 || loggedInUser === article.author || loggedInUser === ""}>+</button>
            <button onClick={() => handleClick(-1)} className="article_vote_button" disabled={votes === -1 || loggedInUser === article.author || loggedInUser === ""}>-</button>
            <p className="single_article_paragraph">Comments {article.comment_count}</p>
            <AddNewComment isPosting={isPosting} setIsPosting={setIsPosting} comments={comments} setComments={setComments}/>
            </section>
            <CollapseWrapper><CommentsList commentToDelete={commentToDelete} setCommentToDelete={setCommentToDelete} comments={comments} setComments={setComments} article_id={article_id}/></CollapseWrapper>
            <Link to={`/topics/${topic}/articles`} className="single_article_return_to_topics">Return to {topic} articles</Link>
        </>

        
    )
}