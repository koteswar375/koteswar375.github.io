import React from 'react';
import './Intro.css';
import profilePic from '../../assets/profile.png';
const Intro = (props) => {


    return (
        <div className="intro">
            <h6 className="job-title center-align">FULL STACK DEVELOPER</h6>
            <div className="profile-pic">
                <img alt="Profile" height="150" width="150" src={profilePic}/>
            </div>
        </div>
    )
}


export default Intro;