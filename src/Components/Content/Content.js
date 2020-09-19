import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './Content.css';
import Articles from './Articles/Articles';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import TimeLine from './Timeline/TimeLine';

const Content = (props) => {

    return (
        <div>
            <div className="list-items">
                <li><Link to="/">TIMELINE</Link></li>
                <li><Link to="/articles">ARTICLES</Link></li>
                <li><Link to="/projects">GITHUB</Link></li>
                <li><Link to="/skills">SKILLS</Link></li>
            </div>
            <div className="list-item-content">
                <Switch>
                    <Route exact path="/" component={TimeLine}></Route>
                    <Route exact path="/articles" component={Articles}></Route>
                    <Route exact path="/projects" component={Projects}></Route>
                    <Route exact path="/skills" component={Skills}></Route>
                </Switch>
            </div>
        </div>
    )
}


export default Content;