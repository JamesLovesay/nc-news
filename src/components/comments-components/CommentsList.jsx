import { useEffect, useState } from "react";
import * as api from "../../utils/api.js";
import Error from '../error-components/Error.jsx'

export default function CommentsList(article_id) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    if (error) {
        return <Error error={error} />
    }
    if(isLoading) return <p> Loading....</p>

    return (
        <section className=""
    )
}