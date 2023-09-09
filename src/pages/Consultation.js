import React from 'react'
import '../styles/Consultation.css'
import Layout from './Layout'
import Footer from '../components/footer'
import ConsultationContent from '../components/consultationContent'
import classic from '../img/classic.jpg'
import dark from '../img/dark.jpg'
import sand from '../img/sand.jpg'
import ocean from '../img/ocean.jpg'




 const Consultation = () => {

    return (
      <div>

                <Layout currentStyle={document.body.classList.value} /> 
      {(() => {
        if (document.body.classList.value === "body-style-1") {
          return (
            <>
                <ConsultationContent fotoConsultation={classic} contactUsContainer="contactUsContainerClassic" submitContactButton="submitContactButtonClassic"/>
                <div className='footerWeb'>
                <Footer className="footerContainer" classNameFooterTitle="footerTitle"/>
                </div>
            </>
          );
        } else if (document.body.classList.value === "body-style-2") {
          return (
            <>
                   <ConsultationContent fotoConsultation={dark} contactUsContainer="contactUsContainerDark" submitContactButton="submitContactButtonDark"/>
                   <div className='footerWeb'>
                   <Footer className="footerContainerDarkTheme" classNameFooterTitle="footerTitle"/>
                   </div>
               
            
            </>
          );
        } else if (document.body.classList.value === "body-style-3") {
          return (
            <>
                    <ConsultationContent fotoConsultation={sand} contactUsContainer="contactUsContainerEarth" submitContactButton="submitContactButtonEarth"/>
                    <div className='footerWeb'>
                    <Footer className="footerContainerEarthTheme" classNameFooterTitle="footerTitle"/>
                    </div>
            
           
            </>
          );
        } else if (document.body.classList.value === "body-style-4") {
          return (
            <>
                    <ConsultationContent fotoConsultation={ocean} contactUsContainer="contactUsContainerOcean" submitContactButton="submitContactButtonOcean"/>
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
export default Consultation;