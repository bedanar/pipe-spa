import React from 'react'
import './Header.css'

const Header = () => {
    return(
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <a>
                        <img className="logo" src="./logo.svg" />
                    </a>
                    <p className="explain-text">Instagram/twitter for audio</p>
                </div>
            </div>
        </header>
    )
}

export default Header