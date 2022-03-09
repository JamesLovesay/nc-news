import { useState } from "react";




export default function CollapseWrapper({ children }) {
    const [isCommentsVisible, setCommentsVisible] = useState(false);
    const handleClick = () => {
        setCommentsVisible((currVisibility) => {
        return !currVisibility;
        });
    };

    return (
        <>
        <button className="comment_view_button" onClick={handleClick}>{isCommentsVisible ? "Hide Comments" : "Click to view comments"}</button>
        <br />
        <br />
        {isCommentsVisible && children}
        </>
    )
}