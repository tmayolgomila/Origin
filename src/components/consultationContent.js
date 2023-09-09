import React from "react";
import '../styles/Consultation.css'

const ConsultationContent = ({fotoConsultation, contactUsContainer, submitContactButton}) => {
    return (
        <>
            <div className='consultationContainer'>
                    <div className='fotoContainerConsultation'>
                            <picture>
                                <img className='fotoConsultation' src={fotoConsultation} alt='consultation img'/>
                            </picture>
                    </div>
                <section>
                   

                  
                    <div className={contactUsContainer}>
                    <div className="contactContainerWeb">
                        <h1>Contact Us For a Free Consultation</h1>
                        <p>
                        Fill out the form below to schedule a free consultation on your business' website needs.
                        </p>

                        
                        <form>
                            
                       <div className="inputContainerConsultation">
                        <input  placeholder="Name" className="inputNameFormConsultation"/>
                       </div>

                       <div className="inputContainerConsultation">
                        <input  placeholder="Email" className="inputNameFormConsultation"/>
                       </div>

                       <div className="inputContainerConsultation">
                        <input  placeholder="Your message here..." className="inputMessageFormConsultation"/>
                       </div>



                        <button className={submitContactButton}>Submit</button>


                        </form>
                    
                    </div>
                    </div>
                </section>
            </div>
        </>
    );
};
export default ConsultationContent;
