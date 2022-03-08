import { useEffect, useState } from "react";
import ArticleCard from "../article-components/ArticleCard.jsx";
import { useParams } from "react-router-dom";
import * as api from "../../utils/api.js";
import Error from "../error-components/Error.jsx";

export default function TopicList({ topics, articles, setArticles }) {
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

    
    const checkTopic = topics.filter((singleTopic) => {
        return singleTopic.slug === topic
    })

    if(checkTopic.length === 0) {
        return <Error />
    }

    articles.forEach((article) => {
        if(article.topic === topic) filteredArticles.push(article)
    })

    if (error) {
        return <Error error={error}/>
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