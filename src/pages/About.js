import React, {useState} from 'react'
import Layout from './Layout'
import '../styles/AboutStyles.css'
import AboutContent from '../components/aboutContent'
import fotoClassic from '../img/classic.jpg'
import fotoDark from '../img/dark.jpg'
import fotoEarth from '../img/sand.jpg'
import fotoOcean from '../img/ocean.jpg'
import Footer from '../components/footer'


 const About = () => {

    return (
        <div>
        {(() => {
          if (document.body.classList.value === "body-style-1") {
            return (
              <>
                  
                  <AboutContent fotoAbout={fotoClassic} />
                  <Footer className="footerContainer" classNameFooterTitle="footerTitle"/>
          
              </>
            );
          } else if (document.body.classList.value === "body-style-2") {
            return (
              <>
                  <AboutContent fotoAbout={fotoDark} />
                  <Footer className="footerContainerDarkTheme" classNameFooterTitle="footerTitle"/>
               
              </>
            );
          } else if (document.body.classList.value === "body-style-3") {
            return (
              <>
                  
                  <AboutContent fotoAbout={fotoEarth} />
                  <Footer className="footerContainerEarthTheme" classNameFooterTitle="footerTitle"/>
              
              </>
            );
          } else if (document.body.classList.value === "body-style-4") {
            return (
              <>
                  
                  <AboutContent fotoAbout={fotoOcean} />
                  <Footer className="footerContainerOceanTheme" classNameFooterTitle="footerTitle"/>
                  
              </>
            );
          }
        })()}
          
            {(() => {
        if (window.innerWidth < 420) {
          return (
            <Layout currentStyle={document.body.classList.value} /> 
          )
        } else  {
          return (
           <>
           </>
          )
        }
          
        
      })()}

      </div>

    )
  
 
}
export default About;