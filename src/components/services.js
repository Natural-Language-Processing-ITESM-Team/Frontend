import React from "react";
import '../general.scss';

const serviceData = [
    {
        icon: "ri-gamepad-line",
        title: "Gaming",
        description: "Conocer resultados de partidas y consultar fechas de los próximos eventos relaciondas al equipo de Borregos Gaming."
    },
    {
        icon: "ri-book-mark-line",
        title: "Carreras",
        description: "Obtener información acerca de la oferta educativa, así como de las competencias y duración de las carreras actuales."
    },
    {
        icon: "ri-door-open-line",
        title: "Admisiones",
        description: "Conocer lo necesario para tu proceso de admisión y los pasos que debes de seguir para convertirte en un borrego CEM."
    },
    {
        icon: "ri-shirt-line",
        title: "Exatec",
        description: "Consultar los beneficios que tenemos para la comunidad graduada del campus CEM, al igual que ofertas laborales."
    },

]

export const Services = () =>{
    return(
        <section className="serviceSection" id="service">
            <div className="container">
                <div className="serviceTopContent">
                    <h6 className="subtitle">Caso de Aplicación</h6>
                    <h2>HERA actualmente está siendo aplicado para</h2>
                    <h2 className="highlight">chatbot en el ITESM CEM</h2>
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