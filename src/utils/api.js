import axios from 'axios';

const newsApi = axios.create({
    baseURL: "https://nc-news-back-end-project.herokuapp.com/api"
})

export const getArticles = (topic, limit, p, sort_by, order, author) => {
    return newsApi.get("/articles", { params: { topic, limit, p, sort_by, order, author } }).then((res) => {
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

export const getComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
        return res.data.comments;
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

export const addComment = (article_id, comment) => {
    return newsApi.post(`/articles/${article_id}/comments`, comment).then((res) => {
        return res.data.comment;
    })
}

export const deleteComment = (comment_id) => {
    return newsApi.delete(`comments/${comment_id}/`).then((res) => {
        return res.data.comment;
    })
}

export const changeCommentVotes = (comment_id, incVotes) => {
    return newsApi.patch(`comments/${comment_id}`, {inc_votes: incVotes}).then((res) => {
        return res.data.comment;
    })
}
