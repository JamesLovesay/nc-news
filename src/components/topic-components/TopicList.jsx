import { useEffect, useState } from "react";
import ArticleCard from "../article-components/ArticleCard.jsx";
import { useParams } from "react-router-dom";
import * as api from "../../utils/api.js";
import Error from "../error-components/Error.jsx";
import TopicSortForm from "./TopicSortForm.jsx";
import useScreenResolution from "../hook-components.jsx/useScreenResolution.jsx";
import ShowHideFilter from "../article-components/ShowHideFilter.jsx";

export default function TopicList({ articles, setArticles, topics, sortCriteria, setSortCriteria, isFiltered, setFiltered}) {
    let isMobileView = useScreenResolution();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { topic } = useParams();
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        api.getArticles(topic, sortCriteria.limit, sortCriteria.p, sortCriteria.sort_by, sortCriteria.order).then((articles) => {
            if(articles.length === 0) {
                setError("Your search returned no articles. Please refresh the page and try again.")
                setTimeout(() => {
                    setError(null)
                    setSortCriteria({
                    topic: "", 
                    limit: 10, 
                    p: 1, 
                    sort_by: "created_at", 
                    order: "desc"
                })
                setRefresh((prevStatus) => prevStatus + 1)

                }, 2000)
            }
            setArticles(articles)
            setIsLoading(false)
            setFiltered(false)
        })
        .catch((err) => {
            setError(err.message);
        })
    }, [topic, isFiltered, refresh])

    if (error) {
        return <Error className="error_message" error={error}/>
    }
    if(isLoading) return <p> Loading....</p>

    return (
        <>
        {isMobileView ? <ShowHideFilter><TopicSortForm topics={topics} sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} isFiltered={isFiltered} setFiltered={setFiltered}/></ShowHideFilter> : <TopicSortForm topics={topics} sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} isFiltered={isFiltered} setFiltered={setFiltered}/> }
        <section className="topic_article_list">
                {articles.map(({ article_id, title, topic, author, body, votes, created_at}) => {
                return (
                    <ArticleCard 
                    key={article_id}
                    article_id={article_id}
                    title={title}
                    topic={topic}
                    author={author}
                    body={body}
                    votes={votes}
                    created_at={created_at}/>
                )
            })}
        </section>
        </>
        
    )
}