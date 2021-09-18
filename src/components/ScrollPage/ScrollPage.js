import React from "react";
import './ScrollPage.css'
import AudioCard from '../AudioCard'
import Header from "../Header";
import MenuBar from "../MenuBar";


const ScrollPage = () => {
    return(
        <div className="scroll-page">
            <div className="container">
                
                <ul className="scrollpage_content">
                    <img src="./logo_small.svg" className="mb24"/>
                    <AudioCard />
                    <MenuBar />
                </ul>
                
            </div>
        </div>
    )
}

export default ScrollPage