import { useState } from "react";

export default function SortForm({sortCriteria, setSortCriteria}) {

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSortCriteria(values => ({...values, [name]: value }));
        
    }

    const handleSubmit = (e) => {
        console.log(e)
        console.log(sortCriteria)
        e.preventDefault();

    }

    return (
        <form className="filter_sort_container" onSubmit={handleSubmit}>
            <h3>Filter and Sort available articles</h3>
            <div className="filter_sort_item">
                <label htmlFor="filter_sort_limit">How many articles do you want to see?</label>
                <input aria-label="filter number of articles" type="number" id="limit" value={sortCriteria.limit} min="0" name="limit" onChange={handleChange}></input>
                </div>
                <br />
            <div className="filter_sort_item">
                <label htmlFor="filter_sort_p">Choose results page</label>
                <input aria-label="choose which page of results to view" type="number" id="filter_sort_p" value={sortCriteria.p} name="p" min="1" onChange={handleChange}></input>
                </div>
            <div className="filter_sort_topic" onChange={handleChange}>
                <p>Choose your topic</p>
                <input aria-label="choose which page of results to view" type="radio"  name="topic" value="coding" ></input>
                <label htmlFor="coding">Coding</label>
                <input aria-label="choose which page of results to view" type="radio"  name="topic" value="football"></input>
                <label htmlFor="football">Football</label>
                <input aria-label="choose which page of results to view" type="radio"  name="topic" value="cooking"></input>
                <label htmlFor="cooking">Cooking</label>
            </div>
            <div className="filter_sort_sort_by" onChange={handleChange}>
                <p>Choose sort criteria</p>
                <input aria-label="sort result by column" type="radio" id="article_id" name="sort_by" value="article_id"></input>
                <label htmlFor="article_id"> Article ID</label>
                <input aria-label="sort result by column" type="radio" id="title" name="sort_by" value="title"></input>
                <label htmlFor="title">Title</label>
                <input aria-label="sort result by column" type="radio" id="topic" name="sort_by" value="topic"></input>
                <label htmlFor="topic">Topic</label>
                <input aria-label="sort result by column" type="radio" id="created_at" name="sort_by" value="created_at"></input>
                <label htmlFor="created_at">Date</label>
                <input aria-label="sort result by column" type="radio" id="author" name="sort_by" value="author"></input>
                <label htmlFor="author">Author</label>
                <input aria-label="sort result by column" type="radio" id="body" name="sort_by" value="body"></input>
                <label htmlFor="body">Body</label>
                <input aria-label="sort result by column" type="radio" id="votes" name="sort_by" value="votes"></input>
                <label htmlFor="votes">Votes</label>
            </div>
            <div className="filter_sort_order" onChange={handleChange}>
                <p>Choose order</p>
                <input aria-label="choose order of results" type="radio" name="order" value="asc"></input>
                <label htmlFor="ascending">Asc</label>
                <input aria-label="choose which page of results to view" type="radio" name="order" value="desc"></input>
                <label htmlFor="descending">Desc</label>
            </div>
            <input type="submit" id="submit" value="Sort articles"/>
        </form>
    )
}
