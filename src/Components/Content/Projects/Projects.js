import React from 'react';

const Projects = (props) => {
    const Repos = props.repos.map(repo => {
        return (
            <div className="card w-50 text-dark bg-light" key={repo.id}>
                <div className="card-header card-title text-center">
                    {repo.name}
                </div>
                <div className="card-body text-center">
                    {/* <h5 className="card-title">Special title treatment</h5> */}
                    <p className="card-text">{repo.description}</p>
                    <a href={repo.url} target="_blank" className="btn btn-primary">Github Link</a>
                </div>
                <div className="card-footer text-muted">
                    {new Date(repo.updated_at).toDateString()}
                    {repo.topics.map(i => (<span key={i} className="badge bg-success text-light">{i!="project" ? i: null}</span>))}
                </div>
            </div>

        )
    });
    return (
        <div className="container d-flex flex-column align-items-center">
            {Repos}
        </div >
    )
};

export default Projects;