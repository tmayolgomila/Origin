import React from "react";
import '../styles/landingStyles.css'
import playa1 from '../img/playa1.jpg'
import playa2 from '../img/playa2.jpg'
import playa3 from '../img/playa3.jpg'

const LandingPagesContent = () => {
    return (
        <div className="landingContainer">
            <h2>Landing Pages</h2>
            <p>Use one of our landing pages to jumpstart your website or ad campaign. </p>
            <div className="landingPageContainer">
                <div className="landingContainerImage">
                    <h3 className="landingTitle">Landing Page 1</h3>
                    <img className="fotoLanding" src={playa1} />
                </div>
            </div>

            <div className="landingPageContainer">
                <div className="landingContainerImage">
                    <h3 className="landingTitle">Landing Page 2</h3>
                    <img className="fotoLanding" src={playa2} />
                </div>
            </div>

            <div className="landingPageContainer">
                <div className="landingContainerImage">
                    <h3 className="landingTitle">Landing Page 3</h3>
                    <img className="fotoLanding" src={playa3} />
                </div>
            </div>

        </div>
    );
};
export default LandingPagesContent;
