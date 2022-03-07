import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import * as api from "../../utils/api.js";
import ArticleCard from "./ArticleCard.jsx";

export default function ArticleList() {
    const [articles, setArticles] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        api.getArticles().then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
    }, [])

    if(isLoading) return <p> Loading....</p>
    return (
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
    )
}