import React from 'react';
import '../general.scss';

const teamContent = [
    {
        img: 'https://kinsta.com/wp-content/uploads/2021/11/front-end-developer.png',
        name: 'Desarrollo Frontend',
        description: 'Desarrollo de Backend utilizando la paquetería Flask.'
    },
    {
        img: 'https://kinsta.com/es/wp-content/uploads/sites/8/2021/12/back-end-developer-1024x512.png',
        name: 'Desarrollo Backend',
        description: 'Desarrollo de Backend utilizando la paquetería Flask.'
    },
    {
        img: 'https://knowledgeone.ca/wp-content/uploads/2019/10/AI_glossary.jpg',
        name: 'Aprendizaje Automático',
        description: 'Desarrollo de Backend utilizando la paquetería Flask.'
    },
    {
        img: 'https://www.bbva.com/wp-content/uploads/2019/11/machine-learning-1024x629.jpg',
        name: 'Motores de Voz',
        description: 'Desarrollo de Backend utilizando la paquetería Flask.'
    }
]

export const Team = () => {
    return(
        <section className='teamSection'>
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