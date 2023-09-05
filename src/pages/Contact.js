import React, {useState} from 'react'
import '../styles/ContactStyles.css'
import Layout from './Layout'
import ContactContent from '../components/contactContent'


 const Contact = () => {



    return (
      <div>
      {(() => {
        if (document.body.classList.value === "body-style-1") {
          return (
            <>
                <ContactContent />
            </>
          );
        } else if (document.body.classList.value === "body-style-2") {
          return (
            <>
                  <ContactContent />
            </>
          );
        } else if (document.body.classList.value === "body-style-3") {
          return (
            <>
                   <ContactContent />
            </>
          );
        } else if (document.body.classList.value === "body-style-4") {
          return (
            <>
                  <ContactContent />
            </>
          );
        }
      })()}

      <Layout currentStyle={document.body.classList.value} />
    </div>

    )
  
 
}
export default Contact;