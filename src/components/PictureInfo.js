import React from "react";

const PictureInfo = props => {
    return (
        <div className = "picture-list">
            <h1>Copyright: {props.copyright}</h1>
            <h2>Date: {props.date}</h2>
            <h2>Explanation: {props.explanation}</h2>
        </div>
    )
}

export default PictureInfo;