import React from 'react';
import './Intro.css';
import profilePic from '../../assets/profile.png';


const Intro = (props) => {
    return (
        <div className="intro">
            <div className="job-title center-align white-text">FULL STACK DEVELOPER</div>
            <div className="profile-pic">
                <img alt="Profile"  src={profilePic}/>
            </div>
        </div>
    )
}


export default Intro;