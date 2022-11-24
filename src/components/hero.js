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
                            <h2>La Solución Perfecta</h2>
                            <h2 className="highlight">A Todas Tus Dudas</h2>
                        </div>
                        <p className="description">HERA es un conmutador de servicios de procesamiento de lenguaje natural que utiliza un modelo de clasificación de alto nivel para comprenderte y encontrar la mejor solución a tus dudas.</p>
                        <div className="heroBtn">
                            <Link to='/chat'><button className="primaryBtn">Chatea Ahora</button></Link>
                            <button className="secondaryBtn">Repositorio</button>
                        </div>
                    </div>
                    <div className="heroImg">
                        <img 
                        src="https://itcgroup.io/static/templates/assets/images/chatbot.png"
                        alt="hero"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}