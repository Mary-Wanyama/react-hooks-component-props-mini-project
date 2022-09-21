import React from "react";

function About({
    image = 'https://via.placeholder.com/215',
    alternate = 'blog logo',
    aboutText
}) {
    return (
        <React.Fragment>
            <img src={image} alt={alternate}/>
            <p>{aboutText}</p>
        </React.Fragment>

    )
}
export default About