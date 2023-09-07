import React from "react";
import Layout from "./Layout";
import "../styles/BlogStyles.css";
import Footer from "../components/footer";
import BlogsContent from "../components/blogsContent";

const Blogs = () => {
  return (
    <div>
      {(() => {
        if (document.body.classList.value === "body-style-1") {
          return (
            <>
           
            <BlogsContent  className="originBlog" classNamesubmitExplainContainer="submitExplainContainer"/>
            <Footer className="footerContainer" classNameFooterTitle="footerTitle"/>
            </>
          );
        } else if (document.body.classList.value === "body-style-2") {
          return (
            <>
           
            <BlogsContent  className="originBlogDarkTheme" classNamesubmitExplainContainer="submitExplainContainerDarkTheme"/>
            <Footer className="footerContainerDarkTheme" classNameFooterTitle="footerTitle"/>
            </>
          );
        } else if (document.body.classList.value === "body-style-3") {
          return (
            <>
          
            <BlogsContent  className="originBlogEarthTheme" classNamesubmitExplainContainer="submitExplainContainerEarthTheme"/>
            <Footer className="footerContainerEarthTheme" classNameFooterTitle="footerTitle"/>
            </>
          );
        } else if (document.body.classList.value === "body-style-4") {
          return (
            <>
            
            <BlogsContent  className="originBlogOceanTheme" classNamesubmitExplainContainer="submitExplainContainerOceanTheme"/>
            <Footer className="footerContainerOceanTheme" classNameFooterTitle="footerTitle"/>
            </>
          );
        }
      })()}

{(() => {
        if (window.innerWidth < 420) {
          return (
            <Layout currentStyle={document.body.classList.value} /> 
          )
        } else  {
          return (
           <>
           </>
          )
        }
          
        
      })()}
    </div>
  );
};

export default Blogs;
