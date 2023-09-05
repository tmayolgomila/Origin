import React, {useState} from 'react'
import Layout from './Layout'
import '../styles/AboutStyles.css'
import AboutContent from '../components/aboutContent'
import fotoClassic from '../img/classic.jpg'
import fotoDark from '../img/dark.jpg'
import fotoEarth from '../img/sand.jpg'
import fotoOcean from '../img/ocean.jpg'


 const About = () => {

    return (
        <div>
        {(() => {
          if (document.body.classList.value === "body-style-1") {
            return (
              <>
                  <div className='containerAbout'>
                  <AboutContent fotoAbout={fotoClassic} />
                  </div>
              </>
            );
          } else if (document.body.classList.value === "body-style-2") {
            return (
              <>
                  <div className='containerAbout'>
                 
                  <AboutContent fotoAbout={fotoDark} />
                  </div>
              </>
            );
          } else if (document.body.classList.value === "body-style-3") {
            return (
              <>
                  <div className='containerAbout'>


                  <AboutContent fotoAbout={fotoEarth} />
                  </div>
              </>
            );
          } else if (document.body.classList.value === "body-style-4") {
            return (
              <>
                  <div className='containerAbout'>
                  <AboutContent fotoAbout={fotoOcean} />
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