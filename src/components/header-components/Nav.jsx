import { Link } from "react-router-dom";
import * as api from "../../utils/api.js";
import { useEffect, useState } from "react";

export default function Nav({ topics, setTopics }) {

    useEffect(() => {
        api.getTopics().then((topics) => {
            setTopics(topics)
        })
    }, [])

    return (
        <nav className="navbar">
            <Link to="/" className="navlink">Home</Link>
            <h2 className="header_button_label">Select category</h2>
            {topics.map(({slug}) => {
                return <Link to={`/topics/${slug}/articles`} key={slug} className="header_topic_navlink">{`${slug}`}</Link>
            })}
            </nav>
    )
}