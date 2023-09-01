import React from "react";
import '../styles/FooterStyles.css'

const footer = ({className, classNameFooterTitle}) => {
  return (
    <footer>
      <div className={className}>
        <div>
          <div>
            <div>
              <p className={classNameFooterTitle}>Origin</p>
            </div>

            <div className="iconsContainer">

              <a><ion-icon name="logo-twitter" size="large"></ion-icon></a>

              <a><ion-icon name="logo-youtube" size="large"></ion-icon></a>

              <a><ion-icon name="logo-github" size="large"></ion-icon></a>
              
              <a><ion-icon name="logo-linkedin" size="large"></ion-icon></a>

            </div>
          </div>
          <div>
            <p>
              <strong>Landing Pages</strong>
            </p>
            <div>
              <a>Landing Page 1</a>
              <br />
              <a>Landing Page 2</a>
            </div>
          </div>
          <div>
            <p>
              <strong>Company</strong>
            </p>
            <div>
              <a>About</a>
              <br />
              <a>Blog</a>
              <br />
              <a>Contact</a>
            </div>
          </div>
          <div>
            <p>
              <strong>Theme</strong>
            </p>
            <div>
              <a>Get Started</a>
              <br />
              <a>Style Guide</a>
              <br />
              <a>Theme Setup</a>
              <br />
              <a>Customizing Origin</a>
            </div>
          </div>
        </div>
        <div>
          <p>Copyright © 2023 Origin</p>
        </div>
      </div>
    </footer>
  );
};
export default footer;
