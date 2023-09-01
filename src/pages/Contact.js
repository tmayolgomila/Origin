import React, {useState} from 'react'
import '../styles/HomeStyles.css'
import Layout from './Layout'


 const Contact = () => {



    return (
      <div>
      {(() => {
        if (document.body.classList.value === "body-style-1") {
          return (
            <>
                  style 1
            </>
          );
        } else if (document.body.classList.value === "body-style-2") {
          return (
            <>
                  style 2 
            </>
          );
        } else if (document.body.classList.value === "body-style-3") {
          return (
            <>
           style 3
            </>
          );
        } else if (document.body.classList.value === "body-style-4") {
          return (
            <>
           style 4
            </>
          );
        }
      })()}

      <Layout currentStyle={document.body.classList.value} />
    </div>

    )
  
 
}
export default Contact;