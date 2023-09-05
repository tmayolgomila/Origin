import React from "react";
import '../styles/ContactStyles.css'

const ContactContent = () => {
    return (
        <>
            <div className='containerContact'>
                <section>
                    <div>
                        <h1>Contact Us</h1>
                        <p>
                            This is a contact form using Origin's form components to create a
                            contact form component. The contact form is setup to use Netlify's
                            form detection; however, it can easily be translated to other popular
                            form services such as Formspree, Getform, Formspark, etc.
                        </p>
                        <div>
                            <p>
                                <em><a>(800) 867-5309</a></em><em><a>tmayolgomila@gmail.com</a></em>
                            </p>
                        </div>
                    </div>
                    <div>
                        <form>
                            <div>
                                <label>Name</label>
                                <input />
                            </div>


                            <div>
                                <label>Email</label>
                                <input />
                            </div>

                            <div>
                                <label>How Did You Hear About Us?</label>
                                <select>
                                    <option disabled="" selected="" value="">==SELECT AN OPTION==</option>
                                    <option>Google Search</option><option>Social Media</option><option value="Email">Email</option>
                                </select>
                            </div>
                            <div>
                                <label>Message</label>
                                <textarea placeholder="Your message here..."></textarea>
                            </div>


                            <button>Submit</button>


                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};
export default ContactContent;
