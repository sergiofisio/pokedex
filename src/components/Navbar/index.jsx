import * as React from 'react';
import { useState } from 'react';
import pokebola from '../../assets/icon/pokeball-icon.svg';
import ultraball from '../../assets/icon/ultraball-icon.svg';
import logo from '../../assets/logo_pokemon.svg';
import '../../css/color.css';
import './style.css';
const root = document.querySelector(':root')
export default function Navbar() {

    const [theme, setTheme] = useState('light')
    function handleTheme() {
        let localTheme = theme
        if (theme === 'light') {
            root.style.setProperty('--header', 'rgb(255, 196, 0)')
            root.style.setProperty('--background', '#4646467a')
            root.style.setProperty('--bg-card', '#464646bd')
            localTheme = 'dark'
        } else if (theme === 'dark') {
            root.style.setProperty('--header', 'rgb(255, 61, 0)')
            root.style.setProperty('--background', '#d0d0d0b1')
            root.style.setProperty('--bg-card', '#cec6c6c9')
            localTheme = 'light'
        }
        setTheme(localTheme)
    }

    return (
        <header>
            <img src={logo} alt="Logo Pokemon" className='logo' />
            <nav></nav>
            <img onClick={() => handleTheme()} src={theme === 'light' ? pokebola : ultraball} alt="" className="theme" />
        </header>
    );
}