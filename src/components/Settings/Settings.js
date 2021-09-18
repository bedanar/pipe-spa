import React from "react";
import './Settings.css'
import MenuBar from "../MenuBar";


const Settings = () => {
    return(
        <div className="user-page">
            <div className="container">
                <div className="user__content">
                    <img src="./logo_small.svg"/>
                    <div className="user__information">
                        <img className="user__photo" src="./u1.jpg"/>
                        <span className="user__login">@dweebishqys</span>
                        <span className="user__name">Nafisa Valieva</span>
                    </div>
                    <div className="user__dashboard">
                        <div>
                            <span className="big-text">Follows</span>
                            <span className="big-text bold">500</span>
                        </div>
                        <div>
                            <span className="big-text">Followers</span>
                            <span className="big-text bold">500k</span>
                        </div>
                    </div>
                    <form>
                        <div className="input-block">
                            <p className="input-title">E-mail</p>
                            <input type="e-mail" className="input-settings"/>
                        </div>
                        <div className="input-block">
                            <p className="input-title">Password</p>
                            <input  type="password" className="input-settings"/>
                        </div>
                        <div className="input-block">
                            <p className="input-title">Repeat password</p>
                            <input placeholder="" type="password" className="input-settings"/>
                        </div>
                        <button className="follow-btn" type="submit">Submit</button>
                    </form>
                    <div className="menu-bar">
                        <MenuBar />
                    </div>
                    

                </div>
                
            </div>
        </div>
    )
}

export default Settings