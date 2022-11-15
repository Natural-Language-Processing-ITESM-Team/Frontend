import React from "react";
import '../general.scss';

const quickLinks1 = [
    {
        path: '#',
        display: 'Marketing'
    },
    {
        path: '#',
        display: 'Analytics'
    },
    {
        path: '#',
        display: 'Commerce'
    },
]

const quickLinks2 = [
    {
        path: '#about',
        display: 'About'
    },
    {
        path: '#',
        display: 'Job'
    },
    {
        path: '#team',
        display: 'Architecture'
    },
]

const quickLinks3 = [
    {
        path: '#',
        display: 'Pricing'
    },
    {
        path: '#',
        display: 'Documentation'
    },
    {
        path: '#',
        display: 'Guides'
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
                        <h3 className="quickLinksTitle">Navegación</h3>
                        <ul className="quickLinks">
                            {
                                quickLinks1.map((item, index) => (
                                    <li className="quickLinkItem" key={index}><a href={item.path}>{item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footerQuickLinks">
                        <h3 className="quickLinksTitle">Soporte</h3>
                        <ul className="quickLinks">
                            {
                                quickLinks2.map((item, index) => (
                                    <li className="quickLinkItem" key={index}><a href={item.path}>{item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="footerQuickLinks">
                        <h3 className="quickLinksTitle">Compañía</h3>
                        <ul className="quickLinks">
                            {
                                quickLinks3.map((item, index) => (
                                    <li className="quickLinkItem" key={index}><a href={item.path}>{item.display}</a></li>
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