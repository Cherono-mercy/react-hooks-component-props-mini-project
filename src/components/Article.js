import React from 'react'
import blogData from '../data/blog'


function Article({title, date = "January 1, 1970", preview}) {
const articleDetails = blogData.posts.map((article) => {
    return (
        <article key={article.id} >
            <h3>{title=article.title}</h3>
            <small>{date=article.date}</small>
            <p>{preview=article.preview}</p>
        </article>
    )
   
})
return articleDetails;
}
export default Article