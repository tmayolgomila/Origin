import React from 'react';
import '../styles/AboutStyles.css'

function AboutContent({fotoAbout}) {
  return (
    <div>
      <h2>Welcome to Origin!</h2>
      <p>
        At Origin, we are passionate about bringing your vision to life. We understand that in today's digital age, a compelling online presence is essential for the success of any business or marketing campaign. That's where we come in.
      </p>
      <p>
        Our team of dedicated professionals is committed to helping you build the perfect landing page or blog for your new venture. With our expertise in web design, digital marketing, and branding, we are here to guide you every step of the way.
      </p>
      <p>
        What sets us apart? It's our unwavering dedication to creativity, innovation, and excellence. We don't just create websites; we craft digital experiences that captivate your audience and drive results. Our goal is to make your brand shine in the digital landscape, ensuring that your message reaches your target audience effectively.
      </p>
      <div className='fotoContainerAbout'>
            <img className='fotoAbout' src={fotoAbout}/>
      </div>
      <h3>Why choose us?</h3>
      <ol>
        <li>
          <strong>Tailored Solutions:</strong> We believe that one size doesn't fit all. Each project is unique, and we customize our services to meet your specific needs and goals. Whether you're a startup looking to make a splash or an established business seeking a digital makeover, we've got you covered.
        </li>
        <li>
          <strong>Experienced Team:</strong> Our team consists of seasoned professionals with years of experience in web design, development, SEO, and digital marketing. We stay updated with the latest industry trends to ensure that your project stays ahead of the curve.
        </li>
        <li>
          <strong>Client-Centric Approach:</strong> Your satisfaction is our priority. We work closely with you to understand your vision, provide regular updates, and welcome your feedback throughout the process. We believe in open communication and transparency.
        </li>
        <li>
          <strong>Results-Driven:</strong> We measure our success by your success. Whether it's increased website traffic, higher conversion rates, or enhanced brand recognition, we are committed to delivering measurable results that make a difference.
        </li>
        <li>
          <strong>Creative Excellence:</strong> We love to think outside the box. Our creative minds thrive on challenges, and we take pride in crafting visually stunning, user-friendly websites and engaging content that leave a lasting impression.
        </li>
        <li>
          <strong>Affordable Pricing:</strong> Quality doesn't have to break the bank. We offer competitive pricing options to ensure that our services are accessible to businesses of all sizes.
        </li>
      </ol>
      <p>
        So, whether you're embarking on a new business journey or seeking to revamp your online presence, Origin is here to empower your brand and help you succeed in the digital world. Let's work together to turn your dreams into a reality.
      </p>
      <p>
        Contact us today to get started on your exciting digital journey. We can't wait to be a part of your success story!
      </p>
    </div>
  );
}

export default AboutContent;
