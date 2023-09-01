import React, {useState} from 'react'
import '../styles/ContactStyles.css'
import Layout from './Layout'


 const Contact = () => {



    return (
      <div>
      {(() => {
        if (document.body.classList.value === "body-style-1") {
          return (
            <>
                  <div className='containerContact'>
                    We're currently working on this page, please excuse any inconvenience.
                  </div>
            </>
          );
        } else if (document.body.classList.value === "body-style-2") {
          return (
            <>
                  <div className='containerContact'>
                    We're currently working on this page, please excuse any inconvenience.
                  </div>
            </>
          );
        } else if (document.body.classList.value === "body-style-3") {
          return (
            <>
                  <div className='containerContact'>
                    We're currently working on this page, please excuse any inconvenience.
                  </div>
            </>
          );
        } else if (document.body.classList.value === "body-style-4") {
          return (
            <>
                  <div className='containerContact'>
                    We're currently working on this page, please excuse any inconvenience.
                  </div>
            </>
          );
        }
      })()}

      <Layout currentStyle={document.body.classList.value} />
    </div>

    )
  
 
}
export default Contact;