import React from "react";
import '../general.scss';

const serviceData = [
    {
        icon: "ri-apps-line",
        title: "App Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula sit amet elit ullamcorper porttitor blandit."
    },
    {
        icon: "ri-code-s-slash-line",
        title: "Web Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula sit amet elit ullamcorper porttitor blandit."
    },
    {
        icon: "ri-landscape-line",
        title: "Graphic Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula sit amet elit ullamcorper porttitor blandit."
    },
    {
        icon: "ri-rocket-line",
        title: "Digital Marketing",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ligula sit amet elit ullamcorper porttitor blandit."
    },

]

export const Services = () =>{
    return(
        <section className="serviceSection" id="service">
            <div className="container">
                <div className="serviceTopContent">
                    <h6 className="subtitle">Our Services</h6>
                    <h2>Save time managing your business with</h2>
                    <h2 className="highlight">our best services</h2>
                </div>

                <div className="serviceItemWrapper">
                    {
                        serviceData.map((item, index) =>(
                            <div className="serviceItem" key={index}>
                                <span className="serviceIcon"><i className={item.icon}></i></span>
                                <h3 className="serviceTitle">{item.title}</h3>
                                <p className="description">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}