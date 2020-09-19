import React from 'react';


const Articles = (props) => {

    const articles = props.articles;
    return (
        <div>
            {articles ? articles.map(article => {
            return (
            <div className="container" key={article.id}>
                <div className="card-panel">
                    <span className="blue-text text-darken-2">{article.title}</span>
                </div>
            </div>
            )}
            ) : (
                    <div>No articles to display</div>
                )
            }
        </div>
    )
};

export default Articles;