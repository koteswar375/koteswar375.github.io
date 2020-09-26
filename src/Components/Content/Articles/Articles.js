import React from 'react';
import './Articles.css';

const Articles = (props) => {

    const articles = props.articles;
    return (
        <div>
            {articles ? articles.map(article => {
                return (

                    <div className="container" key={article.id}>
                        <a target="_blank" rel="noopener noreferrer" href={article.link}>
                        <div className="card horizontal">
                            <div className="card-image">
                                <img alt="thumbnail" height="150" src={article.thumbnail} />
                            </div>
                                <div className="card-stacked">
                                    <div className="card-content valign-wrapper center-align grey-text text-darken-4">
                                        <h6>{article.title}</h6>
                                    </div>
                                    <div className="card-action">
                                        
                                    </div>
                                </div>
                            </div>
                            </a>
                            {/* <div className="card-panel">
                    <span className="blue-text text-darken-2">{article.title}</span>
                </div> */}
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