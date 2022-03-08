import axios from 'axios';

const newsApi = axios.create({
    baseURL: "https://nc-news-back-end-project.herokuapp.com/api"
})

export const getArticles = (topic, limit, p, sort_by, order) => {
    return newsApi.get("/articles", { params: { topic, limit, p, sort_by, order } }).then((res) => {
        return res.data.articles;
    })
}

export const getTopics = () => {
    return newsApi.get("/topics").then((res) => {
        return res.data.topics;
    })
}

export const getArticle = (article_id) => {
    return newsApi.get(`/articles/${article_id}`).then((res) => {
        return res.data.article;
    })
}