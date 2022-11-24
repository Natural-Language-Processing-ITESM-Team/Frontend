import React from 'react';
import '../general.scss';

const teamContent = [
    {
        img: 'https://kinsta.com/wp-content/uploads/2021/11/front-end-developer.png',
        name: 'Desarrollo Frontend',
        description: 'El Frontend de la aplicación HERA fue realizado utilizando el framework ReactJS.'
    },
    {
        img: 'https://kinsta.com/es/wp-content/uploads/sites/8/2021/12/back-end-developer-1024x512.png',
        name: 'Desarrollo Backend',
        description: 'Desarrollo de Backend utilizando la paquetería Flask del lenguaje Python.'
    },
    {
        img: 'https://knowledgeone.ca/wp-content/uploads/2019/10/AI_glossary.jpg',
        name: 'Aprendizaje Automático',
        description: 'Para nuestro modelo utilizamos datos de Twitter y la documentación de Huggingface.'
    },
    {
        img: 'https://www.bbva.com/wp-content/uploads/2019/11/machine-learning-1024x629.jpg',
        name: 'Motores de Voz',
        description: 'Se utilizaron los servicios de NLP de Amazon, Google, Microsoft, IBM y Nvidia.'
    }
]

export const Arch = () => {
    return(
        <section className='teamSection' id='architecture'>
            <div className='container'>
                <div className='teamContent'>
                    <h6 className='subtitle'>Arquitectura</h6>
                    <h2>Conoce los componentes de <span className='highlight'>HERA</span></h2>
                </div>

                <div className='teamWrapper'>
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