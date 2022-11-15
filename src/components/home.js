import React, {useState, useEffect} from 'react';
import '../general.scss';
import { Header } from './header';
import { Hero } from './hero';
import { Counter } from './counter';
import { Services } from './services';
import { About } from './about';
import { Team } from './team';
import { Footer } from './footer';

export const Home = () =>{

    const [theme, setTheme] = useState('');

    const toggleTheme = () => {
        theme === '' ? setTheme('light-theme') : setTheme('');
    }

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    return(
        <>
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <Hero theme={theme} />
            <Counter />
            <Services />
            <About />
            <Team />
            <Footer />
        </>
    )
}