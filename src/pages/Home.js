import React, { useState, useEffect } from 'react'
import '../styles/HomeStyles.css'
import fotoClassic from '../img/classic.jpg'
import fotoDark from '../img/dark.jpg'
import fotoSand from '../img/sand.jpg'
import fotoOcean from '../img/ocean.jpg'
import Layout from './Layout'
import HomeContent from '../components/homeContent'
import Footer from '../components/footer'
import LandingPagesContent from '../components/landingPagesContent'



export const ButtonsHome = ({ handleStyleChange }) => {

  return (
    <div className='buttonThemes'>
      <button id='buttonClassic' onClick={() => handleStyleChange('body-style-1')}>Classic</button>
      <button id='buttonDark' onClick={() => handleStyleChange('body-style-2')}>Dark</button>
      <button id='buttonEarth' onClick={() => handleStyleChange('body-style-3')}>Earth</button>
      <button id='buttonOcean' onClick={() => handleStyleChange('body-style-4')}>Ocean</button>
    </div>
  )
}

const Home = () => {

  const [currentStyle, setCurrentStyle] = useState('body-style-1');

  const handleStyleChange = (newStyle) => {
    document.body.classList.remove(currentStyle);
    document.body.classList.add(newStyle);
    setCurrentStyle(newStyle);
  };

  useEffect(() => {
    document.body.className = '';
    document.body.classList.add(currentStyle);
  }, [currentStyle]);


  return (

    <div>
      <Layout currentStyle={currentStyle} />
      {(() => {
        if (currentStyle === 'body-style-1') {
          return (
            <div className='containerHome'>
              <div className='containerWebHome'>
                <div className='welcomeButtonsContainer'>
                  <HomeContent classNameHomeText="homeText1" classNameReactLink="reactLink1" classNameGetStartedButton="getStartedButton" classNameStyleGuideButton="styleGuideButton" />

                  <ButtonsHome handleStyleChange={handleStyleChange} />

                </div>

                <div className='fotoContainer'>
                  <img className='foto' src={fotoClassic} alt='foto classic'/>
                </div>

                </div>
            <div className='containerLandingWebHome'>
              <LandingPagesContent className="landingContainerClassic" classNameLink="linkLandingClassic" />
          
              </div>
              <div className='footerWeb'>
                <Footer className="footerContainer" classNameFooterTitle="footerTitle" />
                </div>

            </div>
          )
        } else if (currentStyle === 'body-style-2') {
          return (
            <div className='containerHome'>
              <div className='containerWebHome'>
                <div className='welcomeButtonsContainer'>
                  <HomeContent classNameHomeText="homeText2" classNameReactLink="reactLink" classNameGetStartedButton="getStartedButton1" classNameStyleGuideButton="styleGuideButton1" />

                  <ButtonsHome handleStyleChange={handleStyleChange} />
                </div>
                <div className='fotoContainer'>
                  <img className='foto' src={fotoDark} alt='foto dark'/>
                </div>
              </div>
              <div className='containerLandingWebHome'>
              <LandingPagesContent className="landingContainerDark" classNameLink="linkLandingDark" />
              </div>
              <div className='footerWeb'>
                <Footer className="footerContainerDarkTheme" classNameFooterTitle="footerTitle" />
              </div>
            </div>
          )
        } else if (currentStyle === 'body-style-3') {
          return (
            <div className='containerHome'>
              <div className='containerWebHome'>
                <div className='welcomeButtonsContainer'>
                  <HomeContent classNameHomeText="homeText3" classNameReactLink="reactLink" classNameGetStartedButton="getStartedButton2" classNameStyleGuideButton="styleGuideButton2" />

                  <ButtonsHome handleStyleChange={handleStyleChange} />
                </div>
                <div className='fotoContainer'>
                  <img className='foto' src={fotoSand} alt='foto sand' />
                </div>
              </div>
              <div className='containerLandingWebHome'>
              <LandingPagesContent className="landingContainerEarth" classNameLink="linkLandingEarth" />
              </div>
              <div className='footerWeb'>
                <Footer className="footerContainerEarthTheme" classNameFooterTitle="footerTitle" />
              </div>
            </div>
          )
        } else if (currentStyle === 'body-style-4') {
          return (
            <div className='containerHome'>
              <div className='containerWebHome'>
                <div className='welcomeButtonsContainer'>
                  <HomeContent classNameHomeText="homeText4" classNameReactLink="reactLink" classNameGetStartedButton="getStartedButton3" classNameStyleGuideButton="styleGuideButton3" />

                  <ButtonsHome handleStyleChange={handleStyleChange} />
                </div>
                <div className='fotoContainer'>
                  <img className='foto' src={fotoOcean} alt='foto ocean' />
                </div>
              </div>
              <div className='containerLandingWebHome'>
              <LandingPagesContent className="landingContainerOcean" classNameLink="linkLandingOcean" />
              </div>
              <div className='footerWeb'>
                <Footer className="footerContainerOceanTheme" classNameFooterTitle="footerTitle" />
              </div>
            </div>
          )
        }
      })()}

    </div>

  )


}
export default Home;