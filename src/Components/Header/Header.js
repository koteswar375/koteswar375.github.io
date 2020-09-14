import React from 'react';
import './Header.css';

const Header = (props) => {


    return (
        <div className="header">
                <span className="title">KOTESWAR RAO MEESALA</span>
                <div className="header-items">
                    <span className="headerItem">Contact</span>
                    <span className="headerItem">Resume</span>
                </div>
        </div>
    )
}

export default Header;