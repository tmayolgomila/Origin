import React, {useState} from 'react'
import '../styles/HomeStyles.css'
import foto1 from '../img/img1.jpg'





export const ButtonsHome = ({ currentStyle, handleStyleChange }) => {

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

  const [currentStyle, setCurrentStyle] = useState('body-style-2');

  const handleStyleChange = (newStyle) => {
    document.body.classList.remove(currentStyle);
    document.body.classList.add(newStyle); 
    setCurrentStyle(newStyle); 
  };



    return (
        
      <div>
      {(() => {
        if (currentStyle === 'body-style-1') {
          return (
            <div id='containerHome'>
            <h1 id='containerHomeTitle'>Welcome to <span id='homeText'> Origin </span></h1>
            <p id='principalParagraph'>A marketing website theme built with <a id='reactLink' href="https://react.dev/" target="_blank">React</a> and carefully crafted for startups and businesses.</p>
            
            <div id='homeContainerButtons'>
              <button id='getStartedButton'>Get Started</button>
              <button id='styleGuideButton'>Style Guide </button>
            </div>
    
            <ButtonsHome currentStyle={currentStyle} handleStyleChange={handleStyleChange} />

            <div id='foto1Container'>
            <img id='foto1' src={foto1}/>
            </div>
            
          </div>
          )
        } else if (currentStyle === 'body-style-2') {
          return (
            <div id='containerHome'>
            <h1 id='containerHomeTitle'>Welcome to <span id='homeText2'> Origin </span></h1>
            <p id='principalParagraph'>A marketing website theme built with <a id='reactLink' href="https://react.dev/" target="_blank">React</a> and carefully crafted for startups and businesses.</p>
            
            <div id='homeContainerButtons'>
              <button id='getStartedButton'>Get Started</button>
              <button id='styleGuideButton'>Style Guide </button>
            </div>

            <ButtonsHome currentStyle={currentStyle} handleStyleChange={handleStyleChange} />

            <div id='foto1Container'>
            <img id='foto1' src={foto1}/>
            </div>
            
          </div>
          )
        } else if (currentStyle === 'body-style-3') {
          return (
            <div id='containerHome'>
            <h1 id='containerHomeTitle'>Welcome to <span id='homeText3'> Origin </span></h1>
            <p id='principalParagraph'>A marketing website theme built with <a id='reactLink' href="https://react.dev/" target="_blank">React</a> and carefully crafted for startups and businesses.</p>
            
            <div id='homeContainerButtons'>
              <button id='getStartedButton'>Get Started</button>
              <button id='styleGuideButton'>Style Guide </button>
            </div>
         
            <ButtonsHome currentStyle={currentStyle} handleStyleChange={handleStyleChange} />
    
            <div id='foto1Container'>
            <img id='foto1' src={foto1}/>
            </div>
            
          </div>
          )
        } else if (currentStyle === 'body-style-4') {
          return (
            <div id='containerHome'>
            <h1 id='containerHomeTitle'>Welcome to <span id='homeText4'> Origin </span></h1>
            <p id='principalParagraph'>A marketing website theme built with <a id='reactLink' href="https://react.dev/" target="_blank">React</a> and carefully crafted for startups and businesses.</p>
            
            <div id='homeContainerButtons'>
              <button id='getStartedButton'>Get Started</button>
              <button id='styleGuideButton'>Style Guide </button>
            </div>

            <ButtonsHome currentStyle={currentStyle} handleStyleChange={handleStyleChange} />


            <div id='foto1Container'>
            <img id='foto1' src={foto1}/>
            </div>
            
          </div>
          )
        } 
      })()}
            
            


      
            
      </div>

    )
  
 
}
export default Home;