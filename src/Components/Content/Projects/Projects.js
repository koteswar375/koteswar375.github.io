import React from 'react';

const Projects = (props) => {

    const Repos = props.repos.map(repo => {
        return (
            <div className="card-panel" key={repo.id}>
                <span className="blue-text text-darken-2">{repo.name}</span>
            </div>
        )
    });
    return (
        <div className="container">
            {Repos}
        </div >
    )
};

export default Projects;