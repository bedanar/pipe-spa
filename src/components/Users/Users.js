import React from "react";
import './Users.css'
import MenuBar from '../MenuBar'
const Users = () => {
    return(
        <div className="users-page">
            <div className="container">
                <div className="users-page__content">
                    <img src="./logo_small.svg"/>
                    <input className="input-search" placeholder="Search friends here"/>
                    <ul className="users-list">
                        <li className="user-item">
                            <img className="user__photo" src='./u1.jpg'/>
                            <div className="user-item__info">
                                <span className="user__login">@dweebishqys</span>
                                <span className="user__name">Nafisa Valieva</span>
                            </div>
                        </li>
                    </ul>
                    <MenuBar />
                </div>
            </div>
        </div>
    )
}

export default Users