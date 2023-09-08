import React from "react";
import { Link } from "react-router-dom";
import '../styles/landingStyles.css'
import playa1 from '../img/playa1.jpg'
import playa2 from '../img/playa2.jpg'
import playa3 from '../img/playa3.jpg'

const LandingPagesContent = ({ className, classNameLink }) => {
    return (
        <div className="landingContainer">
            <section>

                <h2>Landing Pages</h2>
                <p>Use one of our landing pages to jumpstart your website or ad campaign. </p>
                <div className="containerLandingWeb">
                  
                    <Link className={classNameLink} to="/landingPage1">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Landing Page 1</h3>
                            <img className="fotoLanding" src={playa1} alt="foto landing 1"/>
                        </div>
                    </div>
                    </Link>

                <Link className={classNameLink} to="/landingPage1">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Landing Page 2</h3>
                            <img className="fotoLanding" src={playa2} alt="foto landing 2"/>
                        </div>
                    </div>
                </Link>
                
                </div>

            </section>

            <section>
                <h2>Company Pages</h2>
                <p>
                    Use one of our prebuilt company pages for your about page, contact page,
                    legal pages, blog posts, etc.
                </p>
                <div className="containerLandingWeb">
                <div className="gridContainer">
                <Link className={classNameLink} to="/about">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">About Page</h3>
                            <img className="fotoLanding" src={playa1} alt="foto landing 4"/>
                        </div>
                    </div>
                </Link>

                <Link className={classNameLink} to="/contact">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Contact Page</h3>
                            <img className="fotoLanding" src={playa1} alt="foto landing 5"/>
                        </div>
                    </div>
                </Link>
                </div>
                <div className="gridContainer">
                <Link className={classNameLink} to="/blogs">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Blog Page</h3>
                            <img className="fotoLanding" src={playa1} alt="foto landing 6"/>
                        </div>
                    </div>
                </Link>
                <Link className={classNameLink} to="/blogPost">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Blog Post</h3>
                            <img className="fotoLanding" src={playa1} alt="foto landing 7"/>
                        </div>
                    </div>
                </Link>
                </div>
                <div className="gridContainer">
                <Link className={classNameLink} to="/companyPage1">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Legal Page</h3>
                            <img className="fotoLanding" src={playa1} alt="foto landing 6"/>
                        </div>
                    </div>
                </Link>
                </div>
                </div>


            </section>

            <section>
                <h2>Theme Pages</h2>
                <p>
                Learn more about how to set up and use the Origin Theme.
                </p>
                <div className="containerLandingWeb">
             
                <Link className={classNameLink} to="/blogs">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Get Started</h3>
                            <img className="fotoLanding" src={playa1} alt="foto landing 8"/>
                        </div>
                    </div>
                </Link>
                <Link className={classNameLink} to="/blogs">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Style Guide</h3>
                            <img className="fotoLanding" src={playa1} alt="foto landing 9"/>
                        </div>
                    </div>
                </Link>
            
                </div>
            </section>


        </div>
    );
};
export default LandingPagesContent;
