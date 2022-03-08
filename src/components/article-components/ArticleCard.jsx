import {Link} from 'react-router-dom';

export default function ArticleCard({ article_id, title, topic, author, body, votes}) {
    return (
        <article className="articlelist_articlecard">
            <Link to={`/topics/${topic}/articles/${article_id}`} className="single_article_link">
            <h3 className="articlecard_title">{title}</h3>
            </Link>
            <h4 className="articlecard_author">{author}</h4>
            <h5 className="articlecard_topic">{topic}</h5>
            <p className="articlecard_votes">Votes - {votes}</p>
        </article>
    )
}