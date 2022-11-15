import React from "react";
import '../general.scss';

export const Hero = ({theme}) =>{
    return(
        <section className="heroSection">
            <div className="container">
                <div className="heroWrapper">
                    <div className="heroContent">
                        <div>
                            <h2>We're Creating Perfect</h2>
                            <h2>Digital Products To</h2>
                            <h2 className="highlight">Promote Your Branch</h2>
                        </div>
                        <p className="description">Hola soy Abraham y solo hablo pelotudeces cuando abro mi boca jajaja. La neta sí estoy bien idiota.</p>
                        <div className="heroBtn">
                            <button className="primaryBtn">Get Started Now</button>
                            <button className="secondaryBtn">Discover More</button>
                        </div>
                    </div>
                    <div className="heroImg">
                        <img 
                        src={ theme === 'light-theme' ? "https://www.appincubator.io/assets/images/chatbot/all-about-chatbot.png" : "https://itcgroup.io/static/templates/assets/images/chatbot.png"} 
                        alt="hero"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}