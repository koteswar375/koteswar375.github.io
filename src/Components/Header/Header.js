import React, { Component } from 'react';
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
                <div className="header white-text d-flex justify-content-between hide-on-med-and-down">
                    <div className="title"> <Link className="text-decoration-none" to="/">KOTESWAR RAO MEESALA</Link></div>
                    <Link to={{pathname: "https://registry.jsonresume.org/koteswar375"}} target="_blank" className="px-5 text-decoration-none fs-5">Resume</Link>
                    {/* <Link to="/contact" className="col s12 m6 l1">Contact</Link> */}

                </div>
                <ul className="sidenav" id="mobile-demo">
                    <li className="sidenav-close"> <Link to="/">KOTESWAR RAO MEESALA</Link></li>
                    <li className="sidenav-close"><Link to={{pathname: "https://registry.jsonresume.org/koteswar375"}} target="_blank">Resume</Link></li>
                    {/* <li className="sidenav-close"><Link to="/contact">Contact</Link></li> */}
                </ul>
            </div>
        )
    }
}

export default Header;