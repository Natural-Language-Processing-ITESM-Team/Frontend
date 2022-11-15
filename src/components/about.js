import React from "react";
import '../general.scss';

const chooseData = [
    {
        icon: "ri-wifi-fill",
        title: "First working process",
        description: "La verdad aquí no sé qué poner, no tengo tanta imaginación."
    },
    {
        icon: "ri-team-line",
        title: "Dedicated team",
        description: "La verdad aquí no sé qué poner, no tengo tanta imaginación."
    },
    {
        icon: "ri-customer-service-2-line",
        title: "24/7 Support",
        description: "La verdad aquí no sé qué poner, no tengo tanta imaginación."
    },
]

export const About = () => {
    return(
        <section className="aboutSection" id="about">
            <div className="container">
                <div className="aboutWrapper">
                    <div className="aboutContent">
                        <h6 className="subtitle">Why Choose Us?</h6>
                        <h2>Specialist in aviding clients on</h2>
                        <h2 className="highlight">financial challenges</h2>
                        <p className="description aboutContentDesc">Somos una pinche empresa bien perrona, casi casi ladramos de lo perra que estamos.
                        Nos gusta mucho trabajar bien, es por eso que Abraham no es nuestro líder.
                        </p>
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