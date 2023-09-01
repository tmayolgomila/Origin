import React, {useState, useEffect} from 'react'
import '../styles/HomeStyles.css'
import foto1 from '../img/img1.jpg'
import fotoClassic from '../img/classic.jpg'
import fotoDark from '../img/dark.jpg'
import fotoSand from '../img/sand.jpg'
import fotoOcean from '../img/ocean.jpg'
import Layout from './Layout'
import HomeContent from '../components/homeContent'
import Footer from '../components/footer'
import LandingPagesContent from '../components/landingPagesContent'



export const ButtonsHome = ({ handleStyleChange }) => {

  return(
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

  console.log(currentStyle)

    return (
        
      <div>
      {(() => {
        if (currentStyle === 'body-style-1') {
          return (
            <div className='containerHome'>

            <HomeContent classNameHomeText="homeText1" classNameReactLink="reactLink1" classNameGetStartedButton="getStartedButton" classNameStyleGuideButton="styleGuideButton"/>
    
            <ButtonsHome handleStyleChange={handleStyleChange} />

            <div className='fotoContainer'>
            <img className='foto' src={fotoClassic}/>
            </div>

            <LandingPagesContent />
            
            <Footer className="footerContainer" classNameFooterTitle="footerTitle"/>

            </div>
          )
        } else if (currentStyle === 'body-style-2') {
          return (
            <div className='containerHome'>

            <HomeContent classNameHomeText="homeText2" classNameReactLink="reactLink" classNameGetStartedButton="getStartedButton1" classNameStyleGuideButton="styleGuideButton1"/>

            <ButtonsHome handleStyleChange={handleStyleChange} />

            <div className='fotoContainer'>
            <img className='foto' src={fotoDark}/>
            </div>

            <LandingPagesContent />

            <Footer className="footerContainerDarkTheme" classNameFooterTitle="footerTitle"/>
            
          </div>
          )
        } else if (currentStyle === 'body-style-3') {
          return (
            <div className='containerHome'>
            
            <HomeContent classNameHomeText="homeText3" classNameReactLink="reactLink" classNameGetStartedButton="getStartedButton2" classNameStyleGuideButton="styleGuideButton2"/>
         
            <ButtonsHome handleStyleChange={handleStyleChange} />
    
            <div className='fotoContainer'>
            <img className='foto' src={fotoSand}/>
            </div>

            <LandingPagesContent />

            <Footer className="footerContainerEarthTheme" classNameFooterTitle="footerTitle"/>
            
          </div>
          )
        } else if (currentStyle === 'body-style-4') {
          return (
            <div className='containerHome'>
            
            <HomeContent classNameHomeText="homeText4" classNameReactLink="reactLink" classNameGetStartedButton="getStartedButton3" classNameStyleGuideButton="styleGuideButton3"/>

            <ButtonsHome handleStyleChange={handleStyleChange} />

            <div className='fotoContainer'>
            <img className='foto' src={fotoOcean}/>
            </div>

            <LandingPagesContent />

            <Footer className="footerContainerOceanTheme" classNameFooterTitle="footerTitle"/>
            
          </div>
          )
        } 
      })()}
              <Layout currentStyle={currentStyle} />
        
      </div>

    )
  
 
}
export default Home;