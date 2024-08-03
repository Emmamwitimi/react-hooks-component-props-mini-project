import React from "react";
import App from "./App";

function About({about,image}){
    return(
        <aside>
            <img src={image || "https://via.placeholder.com/215Links to an external site."} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}
export default About;