import React from 'react'
import '../general.scss'

const navLinks=[
    {
        path:'#home',
        display:'Home'
    },
    {
        path:'#about',
        display:'About'
    },
    {
        path:'#service',
        display:'Service'
    },
    {
        path:'#project',
        display:'Projects'
    },
    {
        path:'#blog',
        display:'Blog'
    }
]

export const Header = ({theme, toggleTheme}) =>{
    return(
        <header className='header'>
            <div className='container'>
                <div className='navWrapper'>
                    <div className='logo'>
                        <h2>HERA</h2>
                    </div>
                    <div className='navigation'>
                        <ul className='menu'>
                            {
                                navLinks.map((item, index) => (
                                    <li className='menuItem' key={index}>
                                        <a className='menuLink' href={item.path}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    
                    <div className='lightMode'>
                        <span onClick={toggleTheme}>
                            {
                                theme ==='light-theme' ? (
                                <span style={{color: "black"}}>
                                    <i className="ri-moon-line"></i>Dark Mode
                                </span>
                                ) : (
                                <span>
                                    <i className="ri-sun-line"></i> Light Mode
                                </span>
                                )
                            }
                        </span>
                    </div>

                </div>
            </div>
        </header>
    )
}