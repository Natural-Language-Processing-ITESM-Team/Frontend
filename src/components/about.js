import React from "react";
import '../general.scss';

const chooseData = [
    {
        icon: "ri-flow-chart",
        title: "Adaptabilidad",
        description: "HERA se adapta a cualquier caso que el cliente solicite."
    },
    {
        icon: "ri-speed-line",
        title: "Velocidad",
        description: "Las respuestas de HERA demoran poco tiempo y son al instante."
    },
    {
        icon: "ri-check-double-line",
        title: "Efictividad",
        description: "Las respuestas de HERA son objetivas y asertivas."
    },
]

export const About = () => {
    return(
        <section className="aboutSection" id="about">
            <div className="container">
                <div className="aboutWrapper">
                    <div className="aboutContent">
                        <h6 className="subtitle">¿Por qué HERA?</h6>
                        <h2>HERA se especializa en</h2>
                        <h2 className="highlight">brindar soluciones personalizadas</h2>
                        <p className="description aboutContentDesc">HERA pone al alcance de los clientes una herramienta que puede ser utilizada en cualquier situación, en cualquier momento y a cualquier hora gracias a las tecnologías integradas en su desarrollo.</p>
                        <div className="chooseItemWrapper">
                            {
                                chooseData.map((item, index) => (
                                    <div className="chooseUsItem" key={index}>
                                        <span className="chooseUsIcon"><i className={item.icon}></i></span>
                                        <div>
                                            <h4 className="chooseUsTitle">{item.title}</h4>
                                            <p className="description">{item.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="aboutImg"><img src="https://loudvideos.com/wp-content/uploads/2019/06/whiteboard-animation-and-explainer-video-studio.png" alt="aboutImg"/></div>
                </div>
            </div>
        </section>
    )
}