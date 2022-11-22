import React from "react";
import { Link } from "react-router-dom";
import '../general.scss';

export const Hero = ({theme}) =>{
    return(
        <section className="heroSection" id="home">
            <div className="container">
                <div className="heroWrapper">
                    <div className="heroContent">
                        <div>
                            <h2>We're Creating Perfect</h2>
                            <h2>Digital Products To</h2>
                            <h2 className="highlight">Promote Your Branch</h2>
                        </div>
                        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula sit amet elit ullamcorper porttitor blandit vitae tellus. Donec et vehicula nulla, vel lacinia dui.</p>
                        <div className="heroBtn">
                            <Link to='/chat'><button className="primaryBtn">Chatea Ahora</button></Link>
                            <button className="secondaryBtn">Repositorio</button>
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