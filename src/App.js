import './App.css';
import { React, useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header-components/Header.jsx";
import Nav from "./components/header-components/Nav.jsx";
import ArticleList from './components/article-components/ArticleList';

function App() {


  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <ArticleList />
  
    </div>
    </BrowserRouter>

  );
}

export default App;
