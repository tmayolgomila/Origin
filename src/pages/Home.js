import React from 'react'
import '../styles/HomeStyles.css'
import foto1 from '../img/img1.jpg'
 const Home = () => {
  return (
    <div id='containerHome'>
      <h1>Welcome to<span id='homeTextGradient'> Origin </span></h1>
      <p id='principalParagraph'>A marketing website theme built with <a id='reactLink' href="https://react.dev/" target="_blank">React</a> and carefully crafted for startups and businesses.</p>
      
      <div id='homeContainerButtons'>
        <button id='getStartedButton'>Get Started</button>
        <button id='styleGuideButton'>Style Guide </button>
      </div>
      
      <div id='foto1Container'>
      <img id='foto1' src={foto1}/>
      </div>
      
    </div>
  )
}
export default Home;