import React from "react";
import Layout from "./Layout";
import "../styles/BlogStyles.css";
import Footer from "../components/footer";
import BlogsContent from "../components/blogsContent";

const Blogs = () => {
  return (
    <div>
      <Layout currentStyle={document.body.classList.value} /> 

      {(() => {
        if (document.body.classList.value === "body-style-1") {
          return (
            <>
           
            <BlogsContent  className="originBlog" classNamesubmitExplainContainer="submitExplainContainer"/>
          <div className="footerWeb">
          <Footer className="footerContainer" classNameFooterTitle="footerTitle"/>
          </div>
          
            </>
          );
        } else if (document.body.classList.value === "body-style-2") {
          return (
            <>
           
            <BlogsContent  className="originBlogDarkTheme" classNamesubmitExplainContainer="submitExplainContainerDarkTheme"/>
            <div className="footerWeb">
            <Footer className="footerContainerDarkTheme" classNameFooterTitle="footerTitle"/>
            </div>
         
            </>
          );
        } else if (document.body.classList.value === "body-style-3") {
          return (
            <>
          
            <BlogsContent  className="originBlogEarthTheme" classNamesubmitExplainContainer="submitExplainContainerEarthTheme"/>
            <div className="footerWeb">

        
            <Footer className="footerContainerEarthTheme" classNameFooterTitle="footerTitle"/>
            </div>
            </>
          );
        } else if (document.body.classList.value === "body-style-4") {
          return (
            <>
            
            <BlogsContent  className="originBlogOceanTheme" classNamesubmitExplainContainer="submitExplainContainerOceanTheme"/>
            <div className="footerWeb">
            <Footer className="footerContainerOceanTheme" classNameFooterTitle="footerTitle"/>
            </div>
            </>
          );
        }
      })()}


            
    </div>
  );
};

export default Blogs;
