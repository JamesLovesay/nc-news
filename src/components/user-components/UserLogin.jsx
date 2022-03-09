import * as api from "../../utils/api.js";
import { useEffect, useState } from "react";
import Error from "../error-components/Error.jsx";

export default function UserLogin({ isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser}) {
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

    const handleClick = (username) => {

        setIsLoggedIn(!isLoggedIn)
        setLoggedInUser(username)

    }

    if (error) {
        return <Error error={error} />
    }

    if(isLoading) return <p> Loading....</p>  

    return (
      <section className="login_users_container">
          <h3>Available Users</h3>
          {users.map(({ username }) => {
              return (
                  <article className="login_user_article" key={username}><h4 key={username}className="username_login">{username}</h4><button value={username} onClick={() => handleClick(username)} className="user_login_button" disable={loggedInUser !== ""}><strong>Login</strong></button></article>
              )
          })}
          </section>  
    )
}