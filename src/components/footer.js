import React from "react";
import '../general.scss';

const quickLinks1 = [
    {
        path: 'https://www.facebook.com/profile.php?id=100087990786763',
        display: 'Facebook'
    },
    {
        path: 'https://api.whatsapp.com/send/?phone=5215525005791&text&type=phone_number&app_absent=0',
        display: 'WhatsApp'
    },
    {
        path: '#',
        display: 'LinkedIn'
    },
]

const quickLinks2 = [
    {
        path: '#about',
        display: 'Nosotros'
    },
    {
        path: '#team',
        display: 'Equipo'
    },
    {
        path: '#service',
        display: 'Aplicación'
    },
]

const quickLinks3 = [
    {
        path: 'https://aws.amazon.com/es/lex/',
        display: 'Amazon'
    },
    {
        path: 'https://www.ibm.com/mx-es/products/watson-assistant/docs-resources',
        display: 'IBM'
    },
    {
        path: 'https://cloud.google.com/dialogflow',
        display: 'Google'
    },
]

export const Footer = () => {

    const year = new Date().getFullYear()

    return(
        <footer className="footer">
            <div className="container">
                <div className="footerWrapper">
                    <div className="footerLogo">
                        <h2>HERA</h2>
                        <p className="description">Let's chat!</p>
                        <p className="smallText description">El proyecto HERA ha sido desarrollado por un equipo multidisciplinario del Tecnológico de Monterrey campus Estado de México.</p>
                    </div>

                    <div className="footerQuickLinks">
                        <h3 className="quickLinksTitle">Contacto</h3>
                        <ul className="quickLinks">
                            {
                                quickLinks1.map((item, index) => (
                                    <li className="quickLinkItem" key={index}><a href={item.path} target='_blank'>{item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footerQuickLinks">
                        <h3 className="quickLinksTitle">Conócenos</h3>
                        <ul className="quickLinks">
                            {
                                quickLinks2.map((item, index) => (
                                    <li className="quickLinkItem" key={index}><a href={item.path}>{item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footerQuickLinks">
                        <h3 className="quickLinksTitle">Servicios</h3>
                        <ul className="quickLinks">
                            {
                                quickLinks3.map((item, index) => (
                                    <li className="quickLinkItem" key={index}><a href={item.path} target='_blank'>{item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <p className="copyright">Copyright {year}, developed by The HERA Project Team. {" "}</p>
            </div>
        </footer>
    )
}