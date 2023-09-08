import React from 'react'
import '../styles/BlogPostStyles.css'
import Layout from './Layout'
import Footer from '../components/footer'
import BlogPostContent from '../components/blogPostContent'
import workRemote from '../img/workRemote.jpg'




 const BlogPost = () => {

    return (
      <div>

                <Layout currentStyle={document.body.classList.value} /> 
      {(() => {
        if (document.body.classList.value === "body-style-1") {
          return (
            <>
                <BlogPostContent fotoBlogPostContent={workRemote}/>
                <div className='footerWeb'>
                <Footer className="footerContainer" classNameFooterTitle="footerTitle"/>
                </div>
            </>
          );
        } else if (document.body.classList.value === "body-style-2") {
          return (
            <>
                      <BlogPostContent fotoBlogPostContent={workRemote} />
                   <div className='footerWeb'>
                   <Footer className="footerContainerDarkTheme" classNameFooterTitle="footerTitle"/>
                   </div>
               
            
            </>
          );
        } else if (document.body.classList.value === "body-style-3") {
          return (
            <>
                       <BlogPostContent fotoBlogPostContent={workRemote} />
                    <div className='footerWeb'>
                    <Footer className="footerContainerEarthTheme" classNameFooterTitle="footerTitle"/>
                    </div>
            
           
            </>
          );
        } else if (document.body.classList.value === "body-style-4") {
          return (
            <>
                    <BlogPostContent fotoBlogPostContent={workRemote} />
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
export default BlogPost;