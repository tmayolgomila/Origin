import React from "react";
import '../styles/HomeStyles.css'


const HomeContent = ({classNameHomeText, classNameReactLink, classNameGetStartedButton, classNameStyleGuideButton}) => {
  return (
<div className="containerContentHome">
            <h1 className='containerHomeTitle'>Welcome to <span className={classNameHomeText}> Origin </span> themes.</h1>
            <p className='principalParagraph'>A marketing website built with  
            <a className={classNameReactLink} href="https://react.dev/" target="_blank"> React </a>
              and carefully crafted for startups and businesses.</p>
            
            <div className='homeContainerButtons'>
              <button className={classNameGetStartedButton}>Get Started</button>
              <button className={classNameStyleGuideButton}>Style Guide </button>
            </div>
</div>
  );
};
export default HomeContent;
