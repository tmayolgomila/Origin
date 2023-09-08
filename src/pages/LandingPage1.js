import React from 'react'
import '../styles/LandinPage1.css'
import Layout from './Layout'
import Footer from '../components/footer'
import LandingPage1Content from '../components/landingPage1Content'
import workRemote from '../img/workRemote.jpg'


 const LandingPage1 = () => {

    return (
      <div>

                <Layout currentStyle={document.body.classList.value} /> 
      {(() => {
        if (document.body.classList.value === "body-style-1") {
          return (
            <>
                <LandingPage1Content fotoLandingPage1={workRemote} foto2LandingPage1={workRemote} getStartedButton="getStartedButtonClassic" happyCustomerContainer=""/>
                <div className='footerWeb'>
                <Footer className="footerContainer" classNameFooterTitle="footerTitle"/>
                </div>
            </>
          );
        } else if (document.body.classList.value === "body-style-2") {
          return (
            <>
                   <LandingPage1Content fotoLandingPage1={workRemote} foto2LandingPage1={workRemote} getStartedButton="getStartedButtonDark" happyCustomerContainer=""/>
                   <div className='footerWeb'>
                   <Footer className="footerContainerDarkTheme" classNameFooterTitle="footerTitle"/>
                   </div>
               
            
            </>
          );
        } else if (document.body.classList.value === "body-style-3") {
          return (
            <>
                    <LandingPage1Content fotoLandingPage1={workRemote} foto2LandingPage1={workRemote} getStartedButton="getStartedButtonClassic" happyCustomerContainer=""/>
                    <div className='footerWeb'>
                    <Footer className="footerContainerEarthTheme" classNameFooterTitle="footerTitle"/>
                    </div>
            
           
            </>
          );
        } else if (document.body.classList.value === "body-style-4") {
          return (
            <>
                   <LandingPage1Content fotoLandingPage1={workRemote} foto2LandingPage1={workRemote} getStartedButton="getStartedButtonClassic" happyCustomerContainer=""/>
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