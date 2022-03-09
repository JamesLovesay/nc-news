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

export const getUsers = () => {
    return newsApi.get("/users").then((res) => {
        return res.data.users;
    })
}

export const changeVotes = (article_id, incVotes) => {
    return newsApi.patch(`/articles/${article_id}`, {inc_votes: incVotes}).then((res) => {
        return res.data.article;
    })
}
