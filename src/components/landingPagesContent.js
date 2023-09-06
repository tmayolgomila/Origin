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
                <Link className={classNameLink} to="/blogs">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Landing Page 1</h3>
                            <img className="fotoLanding" src={playa1} />
                        </div>
                    </div>
                </Link>

                <Link className={classNameLink} to="/blogs">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Landing Page 2</h3>
                            <img className="fotoLanding" src={playa2} />
                        </div>
                    </div>
                </Link>
                <Link className={classNameLink} to="/blogs">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Landing Page 3</h3>
                            <img className="fotoLanding" src={playa3} />
                        </div>
                    </div>
                </Link>
            </section>

            <section>
                <h2>Company Pages</h2>
                <p>
                    Use one of our prebuilt company pages for your about page, contact page,
                    legal pages, blog posts, etc.
                </p>
                <Link className={classNameLink} to="/blogs">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">About Page</h3>
                            <img className="fotoLanding" src={playa1} />
                        </div>
                    </div>
                </Link>

                <Link className={classNameLink} to="/blogs">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Contact Page</h3>
                            <img className="fotoLanding" src={playa1} />
                        </div>
                    </div>
                </Link>
                <Link className={classNameLink} to="/blogs">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Blog Post</h3>
                            <img className="fotoLanding" src={playa1} />
                        </div>
                    </div>
                </Link>
                <Link className={classNameLink} to="/blogs">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Legal Page</h3>
                            <img className="fotoLanding" src={playa1} />
                        </div>
                    </div>
                </Link>



            </section>

            <section>
                <h2>Theme Pages</h2>
                <p>
                Learn more about how to set up and use the Odyssey Theme.
                </p>
                <Link className={classNameLink} to="/blogs">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Get Started</h3>
                            <img className="fotoLanding" src={playa1} />
                        </div>
                    </div>
                </Link>
                <Link className={classNameLink} to="/blogs">
                    <div className={className}>
                        <div className="landingContainerImage">
                            <h3 className="landingTitle">Style Guide</h3>
                            <img className="fotoLanding" src={playa1} />
                        </div>
                    </div>
                </Link>
            </section>


        </div>
    );
};
export default LandingPagesContent;
