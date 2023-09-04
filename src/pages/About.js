import React, {useState} from 'react'
import Layout from './Layout'
import '../styles/AboutStyles.css'
import AboutContent from '../components/aboutContent'


 const About = () => {

    return (
        <div>
        {(() => {
          if (document.body.classList.value === "body-style-1") {
            return (
              <>
                  <div className='containerAbout'>
                  <AboutContent />
                  </div>
              </>
            );
          } else if (document.body.classList.value === "body-style-2") {
            return (
              <>
                  <div className='containerAbout'>
                 
                  <AboutContent />
                  </div>
              </>
            );
          } else if (document.body.classList.value === "body-style-3") {
            return (
              <>
                  <div className='containerAbout'>


                  <AboutContent />
                  </div>
              </>
            );
          } else if (document.body.classList.value === "body-style-4") {
            return (
              <>
                  <div className='containerAbout'>
                  <AboutContent />
                    </div>
              </>
            );
          }
        })()}
  
        <Layout currentStyle={document.body.classList.value} />
      </div>

    )
  
 
}
export default About;