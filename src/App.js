import './App.css';
import { React, useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header-components/Header.jsx";
import Nav from "./components/header-components/Nav.jsx";
import ArticleList from './components/article-components/ArticleList';
import TopicList from './components/topic-components/TopicList';
import Error from "./components/error-components/Error.jsx"

function App() {
    const [articles, setArticles] = useState([]);
    const [topics, setTopics] = useState([])

  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Nav topics={topics} setTopics={setTopics}/>
          <Routes>
            <Route path="/" element={<ArticleList articles={articles} setArticles={setArticles}/>}/>
            <Route path="/topics/:topic/articles" element={<TopicList articles={articles} setArticles={setArticles} topics={topics}/>}/>
            <Route path="*" element={<Error />}/>
          </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
