import axios from 'axios';

const newsApi = axios.create({
    baseURL: "https://nc-news-back-end-project.herokuapp.com/api"
})

export const getArticles = () => {
    return newsApi.get("/articles?limit=1000").then((res) => {
        return res.data.articles;
    })
}

export const getTopics = () => {
    return newsApi.get("/topics").then((res) => {
        return res.data.topics;
    })
}