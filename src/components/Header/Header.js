import React from 'react';
import './Header.css';
import burgerMenu from '../../images/icons/burger-menu-icon.svg';

function Header() {
    return (
        <>
            <header className='header block'>
                <div className='header__menu-container'>
                    <img src={burgerMenu} className='header__burger-menu-icon' alt='Иконка бургер-меню' />
                    <p className='header__menu-text'>menu</p>
                </div>
                <p className='header__phone-number'>&#43;7&#32;495&#32;320&#x2010;02&#x2010;98</p>
            </header>

        </>
    )
}

export default Header;