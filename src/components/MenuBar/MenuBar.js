import React from "react";
import { Link } from "react-router-dom";
import './MenuBar.css'

const MenuBar = () => {
    return(
        <div className="menu-bar">
            <div className="container">
                <div className="menu-bar__content">
                    <Link to="/">
                        <img src="./home.svg" />
                    </Link>
                    <Link to="/users">
                        <img src="./search.svg" />
                    </Link>
                    <Link to="/user">
                        <img src="./person.svg" />
                    </Link>
                    <Link to="/settings">
                        <img src="./settings.svg" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MenuBar