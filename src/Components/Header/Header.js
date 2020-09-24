import React, {Component} from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import * as M from 'materialize-css';

class Header extends Component {
  
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div className="nav-wrapper">
                <div data-target="mobile-demo" className="sidenav-trigger hide-on-large-only"><i className="material-icons">menu</i></div>
                <div className="header grey darken-3  white-text row hide-on-med-and-down">
                    <div className="title col s12 m12 l4"> <Link to="/">KOTESWAR RAO MEESALA</Link></div>
                    <Link to="/resume" className="col s12 m6 l1 offset-l6">Resume</Link>
                    <Link to="/contact" className="col s12 m6 l1">Contact</Link>

                </div>
                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;