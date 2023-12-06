import React, { useState } from 'react'
import './Header.scss'
import Burger from './menu.svg.png'
import BurgerClose from './close-menu.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import First from '../pages/First'
import Second from '../pages/Second'
import Third from '../pages/Third'
import Fourth from '../pages/Fourth'
import Fifth from '../pages/Fifth'
import Sixth from '../pages/Sixth'

const Header = () => {
    const [isOpen, setOpen] = useState();
    return (
        <>
            <header className='header'>
                <div className='container'>
                    <div className="header__body">
                        <div className='header__logo'>ЮМ</div>
                        <nav className={`header__nav ${isOpen ? 'active' : ''}`}>
                            <ul className='header__nav-list'>
                                <li className='header__nav-item'>
                                    <a href="/">Главная</a>
                                </li>
                                <li className='header__nav-item'>
                                    <a href="/first">1</a>
                                </li>
                                <li className='header__nav-item'>
                                    <a href="/second">2</a>
                                </li>
                                <li className='header__nav-item'>
                                    <a href="/third">3</a>
                                </li>
                                <li className='header__nav-item'>
                                    <a href="/fourth">4</a>
                                </li>
                                <li className='header__nav-item'>
                                    <a href="/fifth">5</a>
                                </li>
                                <li className='header__nav-item'>
                                    <a href="/sixth">6</a>
                                </li>
                            </ul>
                        </nav>
                        <span className='header__menu-button' onClick={() => setOpen(!isOpen)}>
                            {isOpen ? <img src={BurgerClose} alt='menu-close' /> : <img src={Burger} alt='burger' />}
                        </span>
                    </div>
                </div>
            </header>
            <Router className='router'>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/first' element={<First />} />
                    <Route path='/second' element={<Second />} />
                    <Route path='/third' element={<Third />} />
                    <Route path='/fourth' element={<Fourth />} />
                    <Route path='/fifth' element={<Fifth />} />
                    <Route path='/sixth' element={<Sixth />} />
                </Routes>
            </Router>
        </>
    )
}

export default Header