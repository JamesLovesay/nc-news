import { useEffect, useState } from "react";
import * as api from "../../utils/api.js";
import ArticleCard from "./ArticleCard.jsx";
import Error from '../error-components/Error.jsx'
import SortForm from "./SortForm.jsx";
import useScreenResolution from "../hook-components.jsx/useScreenResolution.jsx";
import ShowHideFilter from "./ShowHideFilter.jsx";

export default function ArticleList({ articles, setArticles, topics, setTopics, sortCriteria, setSortCriteria, setFiltered, isFiltered }) {
    let isMobileView = useScreenResolution();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [refresh, setRefresh] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        api.getArticles(sortCriteria.topic, sortCriteria.limit, sortCriteria.p, sortCriteria.sort_by, sortCriteria.order).then((articles) => {
            if(articles.length === 0) {
                setError("Your search returned no articles. Please refresh the page if you are not redirected in three seconds.")
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

                }, 3000)
            }
            setArticles(articles)
            setIsLoading(false)
            setFiltered(false)
        })
        .catch((err) => {
            setError(err.message);
        })
    }, [isFiltered, refresh])

    if (error) { 
        return <Error error={error} />
    }
    if(isLoading) return <p> Loading....</p>

    return (
        <>
        {isMobileView ? <ShowHideFilter>
            <SortForm setTopics={setTopics} topics={topics} sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} isFiltered={isFiltered} setFiltered={setFiltered}/>
            </ShowHideFilter> : <SortForm topics={topics} setTopics={setTopics} sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} isFiltered={isFiltered} setFiltered={setFiltered}/>}
        <section className="homepage_article_list">
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