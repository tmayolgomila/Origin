import React from 'react'
import '../styles/LandinPage1.css'



const LandingPage1Content = ({fotoLandingPage1, foto2LandingPage1, getStartedButton, happyCustomerContainer}) => {

    return (
        <>

            <div className='landingContentPage1Container'>
                <div>
                    <section>
                        <div>
                        <div className='fotoContainerLandingPage1'>
                            <picture>
                                <img className='fotoLandingPage1' src={fotoLandingPage1} alt='landing page 1 img'/>
                            </picture>
                        </div>
                            <div>
                                <h1 className='dontReinventTitle'>Don't Reinvent the Wheel</h1>
                                <p>Use Origin Theme to jumpstart your company's marketing website.</p>
                            </div>
                            <div>
                                <div>
                                    <button className={getStartedButton}>Get Started</button>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>

                <section>
                    <div className={happyCustomerContainer}>
                        <blockquote >"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, vero nobis? Voluptas assumenda, voluptatibus commodi qui ducimus delectus praesentium maiores, impedit iure labore ratione, ea facilis numquam doloremque aperiam aspernatur."</blockquote><p>— Happy Customer</p>
                    </div>
                </section>
                <div>
                    <section>
                        <div>
                            <div>
                                <h2>Why?</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
                                    tempore odio! Nemo consectetur ipsa aperiam similique maxime maiores
                                    consequatur explicabo ut quibusdam fugiat corporis, dignissimos tenetur,
                                    mollitia cumque. Velit.
                                </p>
                            </div>
                            <button>Learn More</button>


                        </div>
                        <div>
                            <div>
                                <h2>How?</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
                                    tempore odio! Nemo consectetur ipsa aperiam similique maxime maiores
                                    consequatur explicabo ut quibusdam fugiat corporis, dignissimos tenetur,
                                    mollitia cumque. Velit.
                                </p>
                            </div>
                            <button>Learn More</button>


                        </div>
                        <div>
                            <div>
                                <h2>What?</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
                                    tempore odio! Nemo consectetur ipsa aperiam similique maxime maiores
                                    consequatur explicabo ut quibusdam fugiat corporis, dignissimos tenetur,
                                    mollitia cumque. Velit.
                                </p>
                            </div>
                            <button>Learn More</button>


                        </div>
                    </section>
                </div>
                <div>
                    <section>
                        <div>
                            <div>
                                <h2>Features</h2>
                                <h3>SEO</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
                                    tempore odio! Nemo consectetur ipsa aperiam similique maxime maiores
                                    consequatur explicabo ut quibusdam fugiat corporis, dignissimos tenetur,
                                    mollitia cumque. Velit.
                                </p>
                                <h3>Responsive</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
                                    tempore odio! Nemo consectetur ipsa aperiam similique maxime maiores
                                    consequatur explicabo ut quibusdam fugiat corporis, dignissimos tenetur,
                                    mollitia cumque. Velit.
                                </p>
                                <h3>Themeable</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem
                                    tempore odio! Nemo consectetur ipsa aperiam similique maxime maiores
                                    consequatur explicabo ut quibusdam fugiat corporis, dignissimos tenetur,
                                    mollitia cumque. Velit.
                                </p>
                            </div>
                        </div>
                        <div className='fotoContainerLandingPage1'>
                            <picture>
                                <img className='fotoLandingPage1' src={foto2LandingPage1}  alt='landing page 2 img'/>
                            </picture>
                        </div>
                    </section>
                </div><div >
                    <section >
                        <div>
                            <h2>Start Your Website Today</h2><p>It only takes a couple clicks to have a new, modern website for your business or startup.</p><a>Get Started</a>
                        </div>
                    </section>
                </div>


            </div>

        </>

    )


}
export default LandingPage1Content;