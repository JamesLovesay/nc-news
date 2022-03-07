import { useEffect, useState } from "react";
import ArticleCard from "../article-components/ArticleCard.jsx";
import { useParams } from "react-router-dom";
import * as api from "../../utils/api.js";

export default function TopicList({ articles, setArticles }) {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const filteredArticles = [];
    const { topic } = useParams();

    useEffect(() => {
        setIsLoading(true);
        api.getArticles().then((articles) => {
            setArticles(articles)
            setIsLoading(false)
        })
        .catch((err) => {
            setError(err.message);
        })
    }, [])

    articles.forEach((article) => {
        if(article.topic === topic) filteredArticles.push(article)
    })

    if (error) {
        return <p>{ error }</p>
    }
    if(isLoading) return <p> Loading....</p>

    return (
        <section className="topic_article_list">
            {filteredArticles.map(({ article_id, title, topic, author, body, votes}) => {
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