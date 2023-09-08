import React from 'react'
import '../styles/LandinPage1.css'
import Layout from './Layout'
import Footer from '../components/footer'
import LandingPage1Content from '../components/landingPage1Content'
import landingPost1 from '../img/landingPost1.jpg'
import landingPost2 from '../img/landingPost2.jpg'


 const LandingPage1 = () => {

    return (
      <div>

                <Layout currentStyle={document.body.classList.value} /> 
      {(() => {
        if (document.body.classList.value === "body-style-1") {
          return (
            <>
                <LandingPage1Content fotoLandingPage1={landingPost1} foto2LandingPage1={landingPost2} getStartedButton="getStartedButtonClassic" happyCustomerContainer="happyCustomerContainerClassic"/>
                <div className='footerWeb'>
                <Footer className="footerContainer" classNameFooterTitle="footerTitle"/>
                </div>
            </>
          );
        } else if (document.body.classList.value === "body-style-2") {
          return (
            <>
                   <LandingPage1Content fotoLandingPage1={landingPost1} foto2LandingPage1={landingPost2} getStartedButton="getStartedButtonDark" happyCustomerContainer="happyCustomerContainerDark"/>
                   <div className='footerWeb'>
                   <Footer className="footerContainerDarkTheme" classNameFooterTitle="footerTitle"/>
                   </div>
               
            
            </>
          );
        } else if (document.body.classList.value === "body-style-3") {
          return (
            <>
                    <LandingPage1Content fotoLandingPage1={landingPost1} foto2LandingPage1={landingPost2} getStartedButton="getStartedButtonEarth" happyCustomerContainer="happyCustomerContainerEarth"/>
                    <div className='footerWeb'>
                    <Footer className="footerContainerEarthTheme" classNameFooterTitle="footerTitle"/>
                    </div>
            
           
            </>
          );
        } else if (document.body.classList.value === "body-style-4") {
          return (
            <>
                   <LandingPage1Content fotoLandingPage1={landingPost1} foto2LandingPage1={landingPost2} getStartedButton="getStartedButtonOcean" happyCustomerContainer="happyCustomerContainerOcean"/>
                   <div className='footerWeb'>
                   <Footer className="footerContainerOceanTheme" classNameFooterTitle="footerTitle"/>
                   </div>
     
            </>
          );
        }
      })()}

    </div>

    )
  
 
}
export default LandingPage1;