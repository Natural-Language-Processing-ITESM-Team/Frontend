import React from 'react';
import '../general.scss';
import EMBM from '../img/elisabonillam.jpeg';
import CJAG from '../img/carav.jpeg';
import JDA from '../img/JD.jpeg';
import Acopho from '../img/acopho.jpeg';
import EA from '../img/lalcosta.jpeg';
import AGF from '../img/abrahamprroloco.jpeg';
import JDHC from '../img/chicokawaii.jpeg';
import EMC from '../img/EMC.jpeg';
import HMMG from '../img/HMMG.jpeg';
import LEGQ from '../img/LEGQ.jpeg';
import RSM from '../img/pataata.jpeg';


const teamContent = [
    {
        img: EMBM,
        name: 'Elisa Bonilla',
        description: 'Desarrolladora Frontend',
        class: 'fit'
    },
    {
        img: CJAG,
        name: 'Carlos Ávila',
        description: 'Desarrollador Frontend',
        class: 'fit'
    },
    {
        img: RSM,
        name: 'Rubén Sánchez',
        description: 'Desarrollador Frontend',
        class: ''
    },
    {
        img: JDA,
        name: 'Daniel Aranda',
        description: 'Ingeniero de Nube',
        class: ''
    },
    {
        img: Acopho,
        name: 'Luis Ferro',
        description: 'Desarrollador Backend',
        class: ''
    },
    {
        img: EA,
        name: 'Eduardo Acosta',
        description: 'Desarrollador Backend',
        class: ''
    },
    {
        img: AGF,
        name: 'Abraham Gil',
        description: 'Ingeniero de ML',
        class: 'fit'
    },
    {
        img: JDHC,
        name: 'Joshua Hernández',
        description: 'Analista de Datos',
        class: 'fit'
    },
    {
        img: EMC,
        name: 'Enrique Maldonado',
        description: 'Analista de Datos',
        class: 'fit'
    },
    {
        img: HMMG,
        name: 'Montserrat Marina',
        description: 'Representante Legal',
        class: ''
    },
    {
        img: LEGQ,
        name: 'Luis González',
        description: 'Representante Legal',
        class: ''
    },
]

export const Team = () => {
    return(
        <section className='teamSection' id='team'>
            <div className='container'>
                <div className='teamContent'>
                    <h6 className='subtitle'>Equipo de Trabajo</h6>
                    <h2>Conoce al equipo detrás de <span className='highlight'>HERA</span></h2>
                </div>

                <div className='teamWrapper2'>
                    {
                        teamContent.map((item, index) => (
                            <div className='teamItem' key={index}>
                                <div className='teamImg'>
                                    <img src={item.img} alt={item.name} className={item.class}/>
                                </div>
                                <div className='teamDetails'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}