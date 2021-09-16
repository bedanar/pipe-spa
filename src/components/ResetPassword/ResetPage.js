import React from "react"
import Header from "../Header"
import { Link } from "react-router-dom"


const ResetPage = () => {
    return(
        <div className="container">
            <Header />
            <main className="main__content">
                <div className="photos">
                    <img src="./photo.png"/>
                </div>
                <div className="signup__content">
                    <img src="./pipe.svg" className="pipe-text" />
                    <form>
                        <input className="input" placeholder="username" type="text" />
                        <input className="input" placeholder="password" type="password" />
                        <input className="input" placeholder="repeat password" type="password" />
                        <div className="flex">
                            <button type="submit" className="black-btn">Reset password</button>
                        </div>
                    </form>
                    <div className="mt16">Check your e-mail! We have sent you the link to change the password.</div>

                </div>
            </main>
        </div>
    )
}

export default ResetPage