import { useEffect, useState } from "react";
import * as api from "../../utils/api.js";
import ArticleCard from "./ArticleCard.jsx";
import Error from '../error-components/Error.jsx'
import SortForm from "./SortForm.jsx";

export default function ArticleList({ articles, setArticles }) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [sortCriteria, setSortCriteria] = useState({
        topic: "", 
        limit: 10, 
        p: 1, 
        sort_by: "created_at", 
        order: "desc"
    })

    useEffect(() => {
        setIsLoading(true);
        api.getArticles(sortCriteria.topic, sortCriteria.limit, sortCriteria.p, sortCriteria.sort_by, sortCriteria.order).then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err.message);
        })
    }, [sortCriteria])

    if (error) {
        return <Error error={error} />
    }
    if(isLoading) return <p> Loading....</p>

    return (
        <>
        <SortForm sortCriteria={sortCriteria} setSortCriteria={setSortCriteria}/>
        <section className="homepage_article_list">
            {articles.map(({ article_id, title, topic, author, body, votes}) => {
                return (

                    <ArticleCard 
                    key={article_id}
                    article_id={article_id}
                    title={title}
                    topic={topic}
                    author={author}
                    body={body}
                    votes={votes}/>
                )
            })}
        </section>
        </>
        
    )
}