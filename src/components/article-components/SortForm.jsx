import * as api from "../../utils/api.js";
import { useEffect, useState } from "react"; 

export default function SortForm({sortCriteria, setSortCriteria, setFiltered, topics}) {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        api.getUsers().then((users) => {
            setUsers(users)
            setIsLoading(false)
        })
            .catch((err) => {
                setError(err.message);
            })
    }, [])

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSortCriteria(values => ({...values, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFiltered(true)
    }

    return (
        <form className="filter_sort_container" onSubmit={handleSubmit}>
            <h3 id="filter_sort_header">Filter and Sort available articles</h3>
            <div className="filter_sort_search_container">
                <label>
                    Articles <whitespace></whitespace>
                    <select name="limit" onChange={handleChange}>
                        <option key="10" value={10}>10</option>
                        <option key="5" value={5}>5</option>
                        <option key="15" value={15}>15</option>
                        <option key="25" value={25}>25</option>
                        <option key="50" value={50}>50</option>
                        <option key="100" value={100}>100</option>  
                    </select>
                </label>
                <label>Page
                <input aria-label="choose which page of results to view" type="number" id="filter_sort_p" value={sortCriteria.p} name="p" min="1" onChange={handleChange}></input>
                </label>
                    <label>
                        Topic <whitespace></whitespace>
                        <select name="topic" onChange={handleChange}>
                            <option key="" value=""></option>
                            {topics.map((topic) => (
                                <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                    Sort By <whitespace></whitespace>
                        <select name="sort_by" onChange={handleChange}>
                            <option key="created_at" value="created_at">Date created</option>
                            <option key="article_id" value="article_id">Article ID</option>
                            <option key="author" value="author">Author</option>
                            <option key="body" value="body">Body of the article</option>
                            <option key="comment_count" value="comment_count">Number of comments</option>
                            <option key="title" value="title">Title</option>
                            <option key="topic" value="topic">Topic</option>
                            <option key="votes" value="votes">Votes</option>
                        </select>
                    </label>
                    <label>
                    Order <whitespace></whitespace>
                        <select name="order" onChange={handleChange}>
                            <option key="desc" value="desc">Desc</option>
                            <option key="asc" value="asc">Asc</option>
                        </select>
                    </label>
                    <label>
                    Author <whitespace></whitespace>
                        <select name="author" onChange={handleChange}>
                            <option key="" value=""></option>
                            {users.map((user) => (
                                <option key={user.username} value={user.username}>{user.username}</option>
                            ))}
                        </select>
                    </label>
            </div>
            <input aria-label="submit filter" type="submit" id="filter_sort_submit" value="Filter articles" key="submit_button"/>
        </form>
    )
}
