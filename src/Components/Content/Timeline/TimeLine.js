import React from 'react';
import './TimeLine.css';

const TimeLine = (props) => {

    return (
        <div className="container timeline">
                   <div class="row">
        <div class="col">
            <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2011</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Bachelor's in Mechanical Engineering</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2004">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2015</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Subject Matter Expert at Chegg</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2005">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2016</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Software Engineer at Tech Mahindra</p>
                    </div>
                </div>
                <div class="timeline-step">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2010">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2018</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Software Developer at Siemens Industry</p>
                    </div>
                </div>
                <div class="timeline-step mb-0">
                    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2020">
                        <div class="inner-circle"></div>
                        <p class="h6 mt-3 mb-1">2021</p>
                        <p class="h6 text-muted mb-0 mb-lg-0">Masters in Software Engineering</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
};

export default TimeLine;