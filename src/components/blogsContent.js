import React from "react";
import '../styles/BlogStyles.css'
import originTheme from "../img/originTheme.jpg";
import workRemote from "../img/workRemote.jpg";
import workHibrid from "../img/workHibrid.jpg";

const BlogsContent = ({className, classNamesubmitExplainContainer}) => {
  return (
<>
<div className="blogsContainer">
              <section className={className}>
                <div className="explainContainer">
                  <h1 className="originBlogTitle">Origin Blog</h1>
                  <p>
                    View our blog to stay up to date on the latest news about
                    our business. Want to be the first to hear about a new blog
                    post? Join our newsletter!
                  </p>
                  <form>
                    <div>
                      <div className="containerInputExplainContainer">
                        <input
                          className="inputExplainContainer"
                          type="text"
                          name="Email"
                          placeholder="Type your mail here"
                        />
                      </div>
                      <button className={classNamesubmitExplainContainer}>
                        Submit 
                      </button>
                    </div>
                  </form>
                </div>
              </section>
              <section className="recentPostContainer">
                <h2 className="recentPostTitle">Recent Posts</h2>
                <div>
                  <a>
                    <img loading="lazy"
                      className="fotoOriginTheme"
                      src={originTheme}
                      alt="originTheme"
                    />

                    <h3>Origin Theme Has Officially Been Released!</h3>
                    <p>
                      The time has come to officially release Origin Theme to
                      the world. Learn more about what it is and how you can
                      start using it today.
                    </p>
                  </a>
                </div>
                <div>
                  <a>
                    <img loading="lazy"
                      className="fotoOriginTheme"
                      src={workRemote}
                      alt="originThemeWork"
                    />
                    <h3>Is Remote Work Better For Your Mental Health?</h3>
                    <p>
                      This is a sample blog post for the Origin Theme. If an
                      excerpt is provided it will appear in the preview.
                    </p>
                  </a>
                </div>
                <div>
                  <a>
                    <img loading="lazy"
                      className="fotoOriginTheme"
                      src={workHibrid}
                      alt="originThemeHibrid"
                    />
                    <h3>Top 10 Reasons To Consider A Hybrid Work Model</h3>
                    <p>This is also a sample blog post for the Origin Theme.</p>
                  </a>
                </div>
              </section>
              </div>
</>
  );
};
export default BlogsContent;
