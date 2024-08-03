import React  from "react";
import App from "./App";
import ArticleList from "./ArticleList";

function Article({title,date= "January 1, 1970", preview,minutes}){
    const getMinutesToRead = (minutes) => {
        if (minutes < 30) {
          return '☕️'.repeat(Math.ceil(minutes / 5));
        } else {
          return '🍱'.repeat(Math.ceil(minutes / 10));
        }
      };
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
};
export default Article;