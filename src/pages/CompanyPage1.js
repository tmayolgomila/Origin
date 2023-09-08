import React from 'react'
import '../styles/CompanyPage1.css'
import Layout from './Layout'
import Footer from '../components/footer'
import CompanyPage1Content from '../components/companyPage1Content'



 const CompanyPage1 = () => {

    return (
      <div>

                <Layout currentStyle={document.body.classList.value} /> 
      {(() => {
        if (document.body.classList.value === "body-style-1") {
          return (
            <>
                <CompanyPage1Content/>
                <div className='footerWeb'>
                <Footer className="footerContainer" classNameFooterTitle="footerTitle"/>
                </div>
            </>
          );
        } else if (document.body.classList.value === "body-style-2") {
          return (
            <>
                     <CompanyPage1Content/>
                   <div className='footerWeb'>
                   <Footer className="footerContainerDarkTheme" classNameFooterTitle="footerTitle"/>
                   </div>
               
            
            </>
          );
        } else if (document.body.classList.value === "body-style-3") {
          return (
            <>
                    <CompanyPage1Content/>
                    <div className='footerWeb'>
                    <Footer className="footerContainerEarthTheme" classNameFooterTitle="footerTitle"/>
                    </div>
            
           
            </>
          );
        } else if (document.body.classList.value === "body-style-4") {
          return (
            <>
                  <CompanyPage1Content/>
                   <div className='footerWeb'>
                   <Footer className="footerContainerOceanTheme" classNameFooterTitle="footerTitle"/>
                   </div>
     
           
            </>
          );
        }
      })()}

    </div>

    )
  
 
}
export default CompanyPage1;