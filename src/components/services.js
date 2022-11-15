import React from "react";
import '../general.scss';

const serviceData = [
    {
        icon: "ri-apps-line",
        title: "App Development",
        description: "Hacemos apps bien chidas, por favor anímense a comprarlas tenemos familia e hijos. No sean gachos, compren."
    },
    {
        icon: "ri-code-s-slash-line",
        title: "Web Design",
        description: "También hacemos buenos diseños web, a nosotros sí nos gusta el frontend porque saber de frontend es para gente basada."
    },
    {
        icon: "ri-landscape-line",
        title: "Graphic Design",
        description: "Diseños gráficos pues sí también, ya ven que si uno le sabe al diseño web piensan que el wey también es diseñador gráfico."
    },
    {
        icon: "ri-rocket-line",
        title: "Digital Marketing",
        description: "Pues así que digamos que somos muy buenos pues no, al chile somos ingenieros no tontos licenciados."
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