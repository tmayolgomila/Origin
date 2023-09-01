import React from "react";
import '../styles/HomeStyles.css'


const HomeContent = ({classNameHomeText, classNameReactLink, classNameGetStartedButton, classNameStyleGuideButton}) => {
  return (
<>
<h1 className='containerHomeTitle'>Welcome to <span className={classNameHomeText}> Origin </span></h1>
            <p className='principalParagraph'>A marketing website theme built with 
            <a className={classNameReactLink} href="https://react.dev/" target="_blank">React</a>
             and carefully crafted for startups and businesses.</p>
            
            <div className='homeContainerButtons'>
              <button className={classNameGetStartedButton}>Get Started</button>
              <button className={classNameStyleGuideButton}>Style Guide </button>
            </div>
</>
  );
};
export default HomeContent;
