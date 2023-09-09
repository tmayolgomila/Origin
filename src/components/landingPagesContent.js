import React from "react";
import { Link } from "react-router-dom";
import '../styles/landingStyles.css'
import playa1 from '../img/playa1.jpg'
import landing1Capture from '../img/landing1Capture.png'
import landing2Capture from '../img/landing2Capture.png'
import aboutCapture from '../img/aboutCapture.png'
import blogCapture from '../img/blogCapture.png'
import contactCapture from '../img/contactCapture.png'
import legalPage from '../img/legalPage.png'
import remoteWorkCapture from '../img/remoteWorkCapture.png'

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
                            <img className="fotoLanding" src={landing1Capture} alt="foto landing 1"/>
                        </div>
                    </div>
                    </Link>

                <Link className={classNameLink} to="/consultation">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Landing Page 2</h3>
                            <img className="fotoLanding" src={landing2Capture} alt="foto landing 2"/>
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
                            <img className="fotoLanding" src={aboutCapture} alt="foto landing 4"/>
                        </div>
                    </div>
                </Link>

                <Link className={classNameLink} to="/contact">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Contact Page</h3>
                            <img className="fotoLanding" src={contactCapture} alt="foto landing 5"/>
                        </div>
                    </div>
                </Link>
                </div>
                <div className="gridContainer">
                <Link className={classNameLink} to="/blogs">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Blog Page</h3>
                            <img className="fotoLanding" src={blogCapture} alt="foto landing 6"/>
                        </div>
                    </div>
                </Link>
                <Link className={classNameLink} to="/blogPost">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Blog Post</h3>
                            <img className="fotoLanding" src={remoteWorkCapture} alt="foto landing 7"/>
                        </div>
                    </div>
                </Link>
                </div>
                <div className="gridContainer">
                <Link className={classNameLink} to="/companyPage1">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Legal Page</h3>
                            <img className="fotoLanding" src={legalPage} alt="foto landing 6"/>
                        </div>
                    </div>
                </Link>
                </div>
                </div>


            </section>



        </div>
    );
};
export default LandingPagesContent;
