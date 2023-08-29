import React, {useState} from 'react'
import '../styles/HomeStyles.css'
import Layout from './Layout'


 const Contact = () => {

  const [currentStyle, setCurrentStyle] = useState('body-style-2');


    return (
        
      <div>
      {(() => {
        if (currentStyle === 'body-style-1') {
          return (
            <div>

            style1
          </div>
          )
        } else if (currentStyle === 'body-style-2') {
          return (
            <div>
style2
          </div>
          )
        } else if (currentStyle === 'body-style-3') {
          return (
            <div>
style 3
          </div>
          )
        } else if (currentStyle === 'body-style-4') {
          return (
            <div>
style4
            
          </div>
          )
        } 
      })()}
      
       <Layout currentStyle={currentStyle} />
       

      </div>

    )
  
 
}
export default Contact;