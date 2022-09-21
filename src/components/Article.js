import React from "react";

function Article(
    article, 
    date = 'January 1, 1970',
    preview
) {
    return (

        <React.Fragment>
            <h3>{article}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </React.Fragment>
        
    )
}
export default Article
