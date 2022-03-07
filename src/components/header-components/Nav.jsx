import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navbar">
            <Link to="/" className="navlink">Home</Link>
            <h2 className="header button_label">Select category</h2>
            <Link to="/topics/coding/articles" className="header_topic_navlink">Coding</Link>
            <Link to="/topics/football/articles" className="header_topic_navlink">Football</Link>
            <Link to="/topics/cooking/articles" className="header_topic_navlink">Cooking</Link>
            </nav>
    )
}