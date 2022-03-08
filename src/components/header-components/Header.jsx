import { Link } from "react-router-dom";

export default function Header() {
    return (
    <header className="App-header">
        <h1 className="header_title">NC News</h1>
        <Link to="/login">
            <p className="login_link">Login</p>
        </Link>
    </header>
    )
}