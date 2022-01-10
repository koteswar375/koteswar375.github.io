import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './Content.css';
import Articles from './Articles/Articles';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import TimeLine from './Timeline/TimeLine';

class Content extends Component {
    state = {
        articles: [],
        repos: []
    }
    FetchMediumArticles = () => axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@koteswar.meesala');
    FetchDevArticles = () => axios.get('https://dev.to/api/articles?username=koteswar375');
    GetGithubRepos = () => axios.get('https://api.github.com/users/koteswar375/repos');
    componentDidMount() {
        Promise.all([this.FetchMediumArticles(), this.FetchDevArticles(), this.GetGithubRepos()])
            .then(res => {
                const mediumArticles = res[0].data.items.filter((item, i) => item.categories.length > 0)
                    .map((item, i) => {
                        const { link, pubDate, thumbnail, title, categories } = item;
                        return { link, pubDate, thumbnail, title, id: i + 1, categories }
                    });
                const devArticles = res[1].data.map((item, i) => {
                    const { url, published_at, social_image, title, id, tags } = item;
                    return { link: url, pubDate: published_at, thumbnail: social_image, title, id, categories: tags.split(',') }
                });
                const githubRepos = res[2].data
                    .filter(i => !i.fork && i.visibility == "public" && i.topics.length > 0 && i.topics.includes('project'))
                    .map((item, i) => {
                        const { html_url, updated_at, name, id, topics, description } = item;
                        return { url: html_url, updated_at, name, id, topics, description }
                    });;
                this.setState({ articles: [...mediumArticles, ...devArticles], repos: githubRepos });
            })
    }

    render() {
        return (
            <div>
                <div className="list-items">
                    <li><Link className="text-decoration-none" to="/">TIMELINE</Link></li>
                    <li><Link className="text-decoration-none" to="/projects">GITHUB</Link></li>
                    <li><Link className="text-decoration-none" to="/articles">ARTICLES</Link></li>
                    {/* <li><Link to="/skills">SKILLS</Link></li> */}
                </div>
                <div className="list-item-content">
                    <Switch>
                        <Route exact path="/" component={TimeLine}></Route>
                        <Route exact path="/articles" render={(props) => <Articles {...props} articles={this.state.articles} />}></Route>
                        <Route exact path="/projects" render={(props) => <Projects {...props} repos={this.state.repos} />}></Route>
                        {/* <Route exact path="/skills" component={Skills}></Route> */}
                    </Switch>
                </div>
            </div>
        )
    }
}


export default Content;