import React, {useState} from 'react'
import '../styles/ContactStyles.css'
import Layout from './Layout'
import ContactContent from '../components/contactContent'
import Footer from '../components/footer'


 const Contact = () => {



    return (
      <div>
      {(() => {
        if (document.body.classList.value === "body-style-1") {
          return (
            <>
                <Layout currentStyle={document.body.classList.value}  originTitle="originTitleClassic"/> 
                <ContactContent contactUsContainer="containerContactClassic" submitContactButton="contactButtonClassic"/>
                <Footer className="footerContainer" classNameFooterTitle="footerTitle"/>
            
            </>
          );
        } else if (document.body.classList.value === "body-style-2") {
          return (
            <>
                  <Layout currentStyle={document.body.classList.value}  originTitle="originTitleDark"/>
                  <ContactContent contactUsContainer="containerContactDark" submitContactButton="contactButtonDark"/>
                  <Footer className="footerContainerDarkTheme" classNameFooterTitle="footerTitle"/>
            
            </>
          );
        } else if (document.body.classList.value === "body-style-3") {
          return (
            <>
                   <Layout currentStyle={document.body.classList.value}  originTitle="originTitleEarth"/>
                   <ContactContent contactUsContainer="containerContactEarth" submitContactButton="contactButtonEarth"/>
                   <Footer className="footerContainerEarthTheme" classNameFooterTitle="footerTitle"/>
           
            </>
          );
        } else if (document.body.classList.value === "body-style-4") {
          return (
            <>
                  <Layout currentStyle={document.body.classList.value}  originTitle="originTitleOcean"/>
                  <ContactContent contactUsContainer="containerContactOcean" submitContactButton="contactButtonOcean"/>
                  <Footer className="footerContainerOceanTheme" classNameFooterTitle="footerTitle"/>
           
            </>
          );
        }
      })()}

    </div>

    )
  
 
}
export default Contact;