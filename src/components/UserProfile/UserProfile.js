import React from 'react'
import './UserProfile.css'
import AudioCard from '../AudioCard'
import MenuBar from '../MenuBar'

const UserProfile = () => {
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
                    <button className="follow-btn">Follow</button>
                    <div className="audio-cards">
                        <AudioCard />
                    </div>
                </div>
                <div className="menu-bar">
                    <MenuBar />
                </div>
            </div>
            
        </div>
    )
}

export default UserProfile