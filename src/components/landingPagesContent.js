import React from "react";
import foto from '../img/img1.jpg'
import '../styles/landingStyles.css'

const LandingPagesContent = () => {
    return (
        <div className="landingContainer">
            <h2>Landing Pages</h2>
            <p>Use one of our landing pages to jumpstart your website or ad campaign. </p>
            <div>
                <div>
                    <h3>Landing Page 1</h3>
                    <img className="foto" src={foto} />
                </div>
            </div>

            <div>
                <div>
                    <h3>Landing Page 2</h3>
                    <img className="foto" src={foto} />
                </div>
            </div>

        </div>
    );
};
export default LandingPagesContent;
