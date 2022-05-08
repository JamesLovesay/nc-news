import './App.css';
import { React, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header-components/Header.jsx";
import Nav from "./components/header-components/Nav.jsx";
import ArticleList from './components/article-components/ArticleList';
import TopicList from './components/topic-components/TopicList';
import Error from "./components/error-components/Error.jsx"
import SingleArticle from './components/article-components/SingleArticle';
import UserLogin from './components/user-components/UserLogin';
import { UserContext } from './components/user-components/UserContext';
import UserStatus from './components/user-components/UserStatus';

function App() {
    const [articles, setArticles] = useState([]);
    const [topics, setTopics] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [sortCriteria, setSortCriteria] = useState({
        topic: "", 
        limit: 10, 
        p: 1, 
        sort_by: "created_at", 
        order: "desc",
        author: ""
    })
    const [isFiltered, setFiltered] = useState(false)

  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser}}>
    <BrowserRouter>
        <div className="App">
          <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          <UserStatus setLoggedInUser={setLoggedInUser} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} loggedInUser={loggedInUser} />
          <Nav topics={topics} setTopics={setTopics}/>
          <Routes>
            <Route path="/" element={<ArticleList sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} isFiltered={isFiltered} setFiltered={setFiltered} topics={topics} setTopics={setTopics} articles={articles} setArticles={setArticles}/>}/>

            <Route path="/topics/:topic/articles" element={<TopicList articles={articles} setArticles={setArticles} topics={topics} sortCriteria={sortCriteria} setSortCriteria={setSortCriteria} isFiltered={isFiltered} setFiltered={setFiltered}/>}/>

            <Route path="/topics/:topic/articles/:article_id" element={<SingleArticle isLoggedIn={isLoggedIn}articles={articles} setArticles={setArticles}/>} />

            <Route path="*" element={<Error />} />

            <Route path="/login" element={<UserLogin isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
          </Routes>
    </div>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
