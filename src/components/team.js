import React from 'react';
import '../general.scss';
import EMBM from '../img/elisabonillam.jpeg';
import CJAG from '../img/carav.jpeg';
import JDA from '../img/JD.jpeg';
import Acopho from '../img/acopho.jpeg';
import EA from '../img/lalcosta.jpeg';
import AGF from '../img/abrahamprroloco.jpeg';
import JDHC from '../img/chicokawaii.jpeg';


const teamContent = [
    {
        img: EMBM,
        name: 'Elisa Bonilla',
        description: 'Desarrolladora Frontend'
    },
    {
        img: CJAG,
        name: 'Carlos Ávila',
        description: 'Desarrollador Frontend'
    },
    {
        img: 'https://planamayor.com.mx/wp-content/uploads/2021/02/pedrorodriguez-atizapan83.jpg',
        name: 'Rubén Sánchez',
        description: 'Desarrollador Frontend'
    },
    {
        img: JDA,
        name: 'Daniel Aranda',
        description: 'Ingeniero de Nube'
    },
    {
        img: Acopho,
        name: 'Luis Ferro',
        description: 'Desarrollador Backend'
    },
    {
        img: EA,
        name: 'Eduardo Acosta',
        description: 'Desarrollador Backend'
    },
    {
        img: AGF,
        name: 'Abraham Gil',
        description: 'Ingeniero de ML'
    },
    {
        img: JDHC,
        name: 'Joshua Hernández',
        description: 'Analista de Datos'
    },
    {
        img: 'https://www.bbva.com/wp-content/uploads/2019/11/machine-learning-1024x629.jpg',
        name: 'Enrique Maldonado',
        description: 'Analista de Datos'
    },
    {
        img: 'https://kinsta.com/es/wp-content/uploads/sites/8/2021/12/back-end-developer-1024x512.png',
        name: 'Montserrat Marina',
        description: 'Representante Legal'
    },
    {
        img: 'https://kinsta.com/es/wp-content/uploads/sites/8/2021/12/back-end-developer-1024x512.png',
        name: 'Luis González',
        description: 'Representante Legal'
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
                                    <img src={item.img} alt={item.name}/>
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