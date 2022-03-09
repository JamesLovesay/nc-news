import { useNavigate } from "react-router-dom";

export default function UserStatus ({ setLoggedInUser, setIsLoggedIn, isLoggedIn, loggedInUser}) {
    const navigate = useNavigate();

    const handleClick = () => {
        if(isLoggedIn) {
            setIsLoggedIn(false);
            setLoggedInUser("");
        } else {
            navigate('/login')
        }

    }

    return (
        <section className="user_login_status_bar">
            <p id="user_login_display">
            {isLoggedIn ? `Logged in as user ${loggedInUser}`: null}    
            </p>
            <button onClick={handleClick}>{isLoggedIn ? "Logout" : "Visit Login Page"}</button>
        </section>

    )

}