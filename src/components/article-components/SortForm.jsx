import { useState } from "react";

export default function SortForm({sortCriteria, setSortCriteria}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        setSortCriteria()
    }

    return (
        <form className="filter_sort_container" onSubmit={handleSubmit}>
            <h3>Filter and Sort available articles</h3>
            <div className="filter_sort_item">
                <label htmlFor="filter_sort_limit">How many articles do you want to see?</label>
                <input aria-label="filter number of articles" type="number" id="filter_sort_limit" value={sortCriteria.limit} name="filter_sort_input" onChange={handleChange}></input>
                </div>
            <div className="filter_sort_item">
                <label htmlFor="filter_sort_p">What page of the results do you wish to view?</label>
                <input aria-label="choose which page of results to view" type="number" id="filter_sort_p" value={sortCriteria.p} name="filter_sort_p" onChange={handleChange}></input>
                </div>
            <div className="filter_sort_topic">
                <p>Choose your topic</p>
                <input aria-label="choose which page of results to view" type="radio" id="coding" name="filter_sort_topic" value={sortCriteria.topic}></input>
                <label htmlFor="coding">Coding</label>
                <input aria-label="choose which page of results to view" type="radio" id="football" name="filter_sort_topic" value={sortCriteria.topic}></input>
                <label htmlFor="football">Football</label>
                <input aria-label="choose which page of results to view" type="radio" id="cooking" name="filter_sort_topic" value={sortCriteria.topic}></input>
                <label htmlFor="cooking">Cooking</label>
            </div>
            <div className="filter_sort_sort_by">
                <p>Choose your topic</p>
                <input aria-label="sort result by column" type="radio" id="article_id" name="filter_sort_sort_by" value={sortCriteria.sort_by}></input>
                <label htmlFor="article_id"> Article ID</label>
                <input aria-label="sort result by column" type="radio" id="title" name="filter_sort_sort_by" value={sortCriteria.sort_by}></input>
                <label htmlFor="title">Title</label>
                <input aria-label="sort result by column" type="radio" id="topic" name="filter_sort_sort_by" value={sortCriteria.sort_by}></input>
                <label htmlFor="topic">Topic</label>
                <input aria-label="sort result by column" type="radio" id="created_at" name="filter_sort_sort_by" value={sortCriteria.sort_by}></input>
                <label htmlFor="created_at">Date</label>
                <input aria-label="sort result by column" type="radio" id="author" name="filter_sort_sort_by" value={sortCriteria.sort_by}></input>
                <label htmlFor="author">Author</label>
                <input aria-label="sort result by column" type="radio" id="body" name="filter_sort_sort_by" value={sortCriteria.sort_by}></input>
                <label htmlFor="body">Body</label>
                <input aria-label="sort result by column" type="radio" id="votes" name="filter_sort_sort_by" value={sortCriteria.sort_by}></input>
                <label htmlFor="votes">Votes</label>
            </div>
            <div className="filter_sort_order">
                <p>Choose order</p>
                <input aria-label="choose order of results" type="radio" id="ascending" name="filter_sort_order" value={sortCriteria.order}></input>
                <label htmlFor="ascending">Asc</label>
                <input aria-label="choose which page of results to view" type="radio" id="descenfding" name="filter_sort_topic" value={sortCriteria.order}></input>
                <label htmlFor="descending">Desc</label>
            </div>
        </form>
    )
}
