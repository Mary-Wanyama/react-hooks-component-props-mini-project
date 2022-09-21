import React from 'react';
import Article from './Article';

function ArticleList({ posts }) {
    const blogs = posts.map((blog) => {
        return <Article key={blog.id} title={blog.title} date={blog.date} />
    });

    return (<div>{blogs}</div>)
}


export default ArticleList;