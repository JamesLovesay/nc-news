import {Link} from 'react-router-dom';

export default function ArticleCard({ article_id, title, topic, author, body, votes}) {
    return (
        <article className="articlelist_articlecard">
            <h3 className="articlecard_title">{title}</h3>
            <h4 className="articlecard_author">Article author - {author}</h4>
            <h5 className="articlecard_topic">Topic - {topic}</h5>
            <p className="articlecard_votes">Votes - {votes}</p>
        </article>
    )
}