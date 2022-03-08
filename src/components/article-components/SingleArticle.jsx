import { useEffect, useState } from "react";
import * as api from "../../utils/api.js";
import Error from '../error-components/Error.jsx'
import {Link} from "react-router-dom";
import ArticleCard from "./ArticleCard.jsx";
import { useParams } from "react-router-dom";

export default function SingleArticle({ articles, setArticles }) {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { topic, article_id } = useParams();
    const [article, setArticle] = useState({})

    useEffect(() => {
        setIsLoading(true);
        api.getArticle(article_id).then((article) => {
            setArticle(article)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err.message);
        })
    }, [])

    if (error) {
        return <Error error={error} />
    }

    if(isLoading) return <p> Loading....</p>  
    return (
        <>
            <section className="single_article_display">
            <ArticleCard 
                key={article_id}
                article_id={article_id}
                title={article.title}
                topic={topic}
                author={article.author}
                body={article.body}
                votes={article.votes}
                comment_count={article.comment_count}/>
            <p className="single_article_body">{article.body}</p>
            <p></p>
            </section>
            <Link to={`topics/${topic}`} className="single_article_return_to_topics">Return to {topic}</Link>
        </>

        
    )
}