export default function SortForm({sortCriteria, setSortCriteria, setFiltered, topics}) {

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
            <h3>Filter and Sort available articles</h3>
            <div key="filter_sort_limit" className="filter_sort_item">
                <label htmlFor="filter_sort_limit"><em>How many articles per page?</em></label>
                <input aria-label="filter number of articles" type="number" id="limit" value={sortCriteria.limit} min="0" name="limit" onChange={handleChange}></input>
                </div>
                <br />
            <div key="filter_sort_p" className="filter_sort_item">
                <label htmlFor="filter_sort_p"><em>Choose results page</em></label>
                <input aria-label="choose which page of results to view" type="number" id="filter_sort_p" value={sortCriteria.p} name="p" min="1" onChange={handleChange}></input>
                </div>
            <div key="filter_sort_topic" className="filter_sort_topic" onChange={handleChange}>
                <p className="filter_label">Choose your topic</p>
                <input aria-label="choose which page of results to view" type="radio"  name="topic" value="" key="all_topics" checked></input>
                <label htmlFor="">All topics</label>

                {topics.map((topic) => {
                    return <>
                    <input aria-label="choose which page of results to view" type="radio"  name="topic" value={`${topic.slug}`} key={`${topic.slug}`} ></input>
                <label htmlFor={`${topic.slug}`}>{`${topic.slug}`}</label>
                    </>
                })
                }
            </div>
            <div key="filter_sort_by" className="filter_sort_sort_by" onChange={handleChange}>
                <p className="filter_label">Choose sort criteria</p>
                <input aria-label="sort result by column" type="radio" id="article_id" name="sort_by" value="article_id" key="article_id"></input>
                <label htmlFor="article_id"> Article ID</label>
                <input aria-label="sort result by column" type="radio" id="title" name="sort_by" value="title" key="title"></input>
                <label htmlFor="title">Title</label>
                <input aria-label="sort result by column" type="radio" id="topic" name="sort_by" value="topic" key="topic"></input>
                <label htmlFor="topic">Topic</label>
                <input aria-label="sort result by column" type="radio" id="created_at" name="sort_by" value="created_at" key="created_at" checked></input>
                <label htmlFor="created_at">Date</label>
                <br />
                <input aria-label="sort result by column" type="radio" id="author" name="sort_by" value="author" key="author"></input>
                <label htmlFor="author">Author</label>
                <input aria-label="sort result by column" type="radio" id="body" name="sort_by" value="body" key="body"></input>
                <label htmlFor="body">Body</label>
                <input aria-label="sort result by column" type="radio" id="votes" name="sort_by" value="votes" key="votes"></input>
                <label htmlFor="votes">Votes</label>
            </div>
            <div key="filter_sort_order" className="filter_sort_order" onChange={handleChange}>
                <p className="filter_label">Choose order</p>
                <input aria-label="choose order of results" type="radio" name="order" value="asc" key="asc"></input>
                <label htmlFor="ascending">Asc</label>
                <input aria-label="choose which page of results to view" type="radio" name="order" value="desc" key="desc" checked></input>
                <label htmlFor="descending">Desc</label>
            </div>
            <input aria-label="submit filter" type="submit" id="filter_sort_submit" value="Filter articles" key="submit_button"/>
        </form>
    )
}
