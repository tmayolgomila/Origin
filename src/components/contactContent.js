import React from "react";
import '../styles/ContactStyles.css'

const ContactContent = ({contactUsContainer, submitContactButton}) => {
    return (
        <>
            <div className='containerContact'>
                <section>
                    <div className={contactUsContainer}>
                        <h1>Contact Us</h1>
                        <p>
                            This is a contact form using Origin's form components to create a
                            contact form component. The contact form is setup to use Netlify's
                            form detection; however, it can easily be translated to other popular
                            form services such as Formspree, Getform, Formspark, etc.
                        </p>
                        <div>
                            <p>
                                <a>(800) 867-5309</a><a>tmayolgomila@gmail.com</a>
                            </p>
                        </div>
                    </div>
                    <div className="containerFormContact">
                        <form>
                            
                       <div className="inputContainer">
                        <input  placeholder="Name" className="inputNameForm"/>
                       </div>

                       <div className="inputContainer">
                        <input  placeholder="Email" className="inputNameForm"/>
                       </div>

                       <div className="inputContainer">
                        <input  placeholder="Your message here..." className="inputMessageForm"/>
                       </div>



                        <button className={submitContactButton}>Submit</button>


                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};
export default ContactContent;
