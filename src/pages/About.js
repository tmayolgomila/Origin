import React from 'react'
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
                      <Layout currentStyle={document.body.classList.value} /> 
        {(() => {
          if (document.body.classList.value === "body-style-1") {
            return (
              <>
                     

                       <AboutContent fotoAbout={fotoClassic} />

                    <div className='footerWeb'>

                    <Footer className="footerContainer" classNameFooterTitle="footerTitle"/>
                    </div>

              </>
            );
          } else if (document.body.classList.value === "body-style-2") {
            return (
              <>
                  <AboutContent fotoAbout={fotoDark} />
                  <div className='footerWeb'>
                      
                  <Footer className="footerContainerDarkTheme" classNameFooterTitle="footerTitle"/>
                      </div>
               
              </>
            );
          } else if (document.body.classList.value === "body-style-3") {
            return (
              <>
                  
                  <AboutContent fotoAbout={fotoEarth} />
                  <div className='footerWeb'>
                      
                  <Footer className="footerContainerEarthTheme" classNameFooterTitle="footerTitle"/>
                      </div>
              
              </>
            );
          } else if (document.body.classList.value === "body-style-4") {
            return (
              <>
                  
                  <AboutContent fotoAbout={fotoOcean} />
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
export default About;