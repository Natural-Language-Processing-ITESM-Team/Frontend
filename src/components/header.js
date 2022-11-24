import React, { useEffect, useRef } from 'react'
import '../general.scss'
import { Link } from 'react-router-dom'

const homeLinks=[
    {
        path:'#home',
        display:'Inicio'
    },
    {
        path:'#about',
        display:'Conoce a HERA'
    },
    {
        path:'#service',
        display:'Aplicación'
    },
    {
        path:'#architecture',
        display:'Arquitectura'
    },
    {
        path:'#team',
        display:'Equipo de trabajo'
    }
]

const chatLinks = [
    {
        path: '/',
        display: 'Volver'
    }
]

export const Header = ({type, theme, toggleTheme}) =>{

    

    const headerRef = useRef(null);
    const menuRef = useRef(null);

    const headerFunc = () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('headerShrink');
        } else {
            headerRef.current.classList.remove('headerShrink');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', headerFunc);

        return () => window.removeEventListener('scroll', headerFunc);
    },[])

    const handleClick = (e) => {
       e.preventDefault();
       
       const targetAttr = e.target.getAttribute('href');

       const location = document.querySelector(targetAttr).offsetTop;
       window.scrollTo({
        left: 0,
        top: location - 80
       });
    };

    const toggleMenu = () => menuRef.current.classList.toggle('menuActive');

    return(
        <header className='header' ref={headerRef}>
            <div className='container'>
                <div className='navWrapper'>
                    <Link to={'/'}>
                        <div className='logo'>
                            <h2>HERA</h2>
                        </div>
                    </Link>
                    <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                        <ul className='menu'>
                            {
                                type === 'home' ? (
                                    homeLinks.map((item, index) => (
                                        <li className='menuItem' key={index}>
                                            <a className='menuLink' onClick={handleClick} href={item.path}>{item.display}</a>
                                        </li>
                                    ))
                                ) : (
                                    chatLinks.map((item, index) => (
                                        <li className='menuItem' key={index}>
                                            <a className='menuLink' href={item.path}>{item.display}</a>
                                        </li>
                                    ))
                                )
                            }
                        </ul>
                    </div>
                    
                    <div className='lightMode'>
                        <span onClick={toggleTheme}>
                            {
                                theme ==='light-theme' ? (
                                <span style={{color: "black"}}>
                                    <i className="ri-moon-line"></i> Modo Oscuro
                                </span>
                                ) : (
                                <span>
                                    <i className="ri-sun-line"></i> Modo Claro
                                </span>
                                )
                            }
                        </span>
                    </div>
                    <span className='mobileMenu' onClick={toggleMenu}>
                        <i className="ri-menu-line"></i>
                    </span>
                </div>
            </div>
        </header>
    )
}