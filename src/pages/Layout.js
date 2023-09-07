import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/LayoutStyles.css";
import Logo from "../img/Logo.png"
import Logo2 from "../img/Logo2.png"

const Layout = ({ currentStyle }) => {


  const [isSearching, setIsSearching] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 420);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 420);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  const toggleMobileNav = () => setIsMobileNavOpen(!isMobileNavOpen);

  return (
    <>

      {isMobileView ? (
        <section className="mobileNavbar">
          <nav className="mobileNav">
            <header id="mobileTitleContainer">

              {(() => {

                if (currentStyle === 'body-style-2') {
                  return (
                    <Link to="/">  <img src={Logo2} width="40" /></Link>
                  )
                } else if (currentStyle === 'body-style-1' || currentStyle === 'body-style-3' || currentStyle === 'body-style-4') {
                  return (
                    <Link to="/">  <img src={Logo} width="40" /></Link>
                  )
                }

              })()}

            </header>

            <div
              id="myLinks"
              style={{ display: isMobileNavOpen ? "block" : "none" }}
            >
              <ul>
                <li>
                  <button onClick={toggleMobileNav}>
                    <Link to="/">Home</Link>
                  </button>
                </li>
                <li>
                  <button onClick={toggleMobileNav}>
                    <Link to="/blogs">Blogs</Link>
                  </button>
                </li>
                <li>
                  <button onClick={toggleMobileNav}>
                    <Link to="/about">About</Link>
                  </button>
                </li>
                <li>
                  <button onClick={toggleMobileNav}>
                    <Link to="/contact">Contact</Link>
                  </button>
                </li>
              </ul>
            </div>

            <div>
              {(() => {

                if (currentStyle === 'body-style-2') {
                  return (

                    <button id="navButtonOpenMobile1" onClick={toggleMobileNav}>

                      {isMobileNavOpen ? (<ion-icon size="large" name="close-outline" id="icon-close1"></ion-icon>) : (<ion-icon size="large" name="menu-outline"></ion-icon>)}

                    </button>
                  )
                } else if (currentStyle === 'body-style-1' || currentStyle === 'body-style-3' || currentStyle === 'body-style-4') {
                  return (
                    <button id="navButtonOpenMobile" onClick={toggleMobileNav}>

                      {isMobileNavOpen ? (<ion-icon size="large" name="close-outline" id="icon-close"></ion-icon>) : (<ion-icon size="large" name="menu-outline"></ion-icon>)}

                    </button>
                  )
                }

              })()}

            </div>

          </nav>
        </section>
      ) : (
        <section className="webNavbar">
          
            
            {(() => {

if (currentStyle === 'body-style-2') {
  return (
    <div className="originTitleDark">
    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={Logo2} width="60" alt="Logo de Origin"/>
        <h1>rigin</h1>
    </Link>
</div>
  )
} else if (currentStyle === 'body-style-1' || currentStyle === 'body-style-3' || currentStyle === 'body-style-4') {
  return (
    <div className="originTitleClassic">
    <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img src={Logo} width="60" alt="Logo de Origin"/>
        <h1>rigin</h1>
    </Link>
</div>

    
  )
}

})()}
          
          <nav className="mainNav">
            <div className="navButtonsContainer">
              <div className="navButtons">
                <button>
                  <Link to="/">Home</Link>
                </button>
                <button>
                  <Link to="/blogs">Blogs</Link>
                </button>
                <li>
                  <button>
                    <Link to="/about">About</Link>
                  </button>
                </li>
                <li>
                <button>
                  <Link to="/contact">Contact</Link>
                </button>

                </li>
           
              </div>
            </div>
          </nav>

        </section>

      )}

      <Outlet className="outlet" />

    </>
  );
};

export default Layout;
