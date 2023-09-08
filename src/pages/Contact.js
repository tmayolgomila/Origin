import React from 'react'
import '../styles/ContactStyles.css'
import Layout from './Layout'
import ContactContent from '../components/contactContent'
import Footer from '../components/footer'


 const Contact = () => {



    return (
      <div>

                <Layout currentStyle={document.body.classList.value} /> 
      {(() => {
        if (document.body.classList.value === "body-style-1") {
          return (
            <>
               
                <ContactContent contactUsContainer="containerContactClassic" submitContactButton="contactButtonClassic"/>
                <div className='footerWeb'>
                <Footer className="footerContainer" classNameFooterTitle="footerTitle"/>
                </div>
            </>
          );
        } else if (document.body.classList.value === "body-style-2") {
          return (
            <>
                  
                  <ContactContent contactUsContainer="containerContactDark" submitContactButton="contactButtonDark"/>
                   <div className='footerWeb'>
                   <Footer className="footerContainerDarkTheme" classNameFooterTitle="footerTitle"/>
                   </div>
               
            
            </>
          );
        } else if (document.body.classList.value === "body-style-3") {
          return (
            <>
                   
                   <ContactContent contactUsContainer="containerContactEarth" submitContactButton="contactButtonEarth"/>
                    <div className='footerWeb'>
                    <Footer className="footerContainerEarthTheme" classNameFooterTitle="footerTitle"/>
                    </div>
            
           
            </>
          );
        } else if (document.body.classList.value === "body-style-4") {
          return (
            <>
                  
                  <ContactContent contactUsContainer="containerContactOcean" submitContactButton="contactButtonOcean"/>
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
export default Contact;