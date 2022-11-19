import React from "react";
import '../general.scss';

const chooseData = [
    {
        icon: "ri-wifi-fill",
        title: "First working process",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        icon: "ri-team-line",
        title: "Dedicated team",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        icon: "ri-customer-service-2-line",
        title: "24/7 Support",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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
                        <p className="description aboutContentDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula sit amet elit ullamcorper porttitor blandit vitae tellus. Donec et vehicula nulla, vel lacinia dui.</p>
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