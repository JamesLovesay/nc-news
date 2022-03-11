import { useState } from "react";

export default function ShowHideFilter({ children }) {
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const handleClick = () => {
        setIsFilterVisible((currVisibility) => {
        return !currVisibility;
        });
    };

    return (
        <>
        <button className="filter_view_button" onClick={handleClick}>{isFilterVisible ? "Hide filter" : "Click to filter articles"}</button>
        {isFilterVisible && children}
        </>
    )
}