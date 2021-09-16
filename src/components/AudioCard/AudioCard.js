import React from 'react'
import './AudioCard.css'

const AudioCard = () => {
    return(
        <div className="">
            <div className="audio-card">
                <div className="card-user__info">
                    <img src="./u1.jpg" className="card-user__img"/>
                    <div className="card-user">
                        <span className="card-user__login">@dweebishqys</span>
                        <span className="card-user__number">200k followers</span>
                    </div>
                </div>
                <audio controls className="audio">
                    <source src="./audio/anthem-choir.mp3" type="audio/mp3"></source>
                </audio>
                    <div className="card__menu">
                        <button className="delete-btn">
                            <img src="./delete.svg" />
                        </button>
                        <button className="like-btn">
                            <span className="likes_number">1200</span>
                            <img src="./likes.svg" />
                        </button>
                    </div>
            </div>
        </div>
    )
}

export default AudioCard