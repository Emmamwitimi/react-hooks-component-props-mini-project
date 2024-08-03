import React from "react";
import App from "./App";
import Article from "./Article";

const ArticleList=({posts})=>{
    return(
        <main>
            {posts.map((post)=>(
                <Article 
                key={post.id} 
                title={post.title} 
                date={post.date} 
                preview={post.preview} 
                minutes={post.minutes} 
              />
            ))}
        </main>
    );
};
export default ArticleList;