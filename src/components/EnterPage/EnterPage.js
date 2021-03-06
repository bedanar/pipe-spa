import React from 'react'
import './EnterPage.css'
import Header from '../Header/Header'
import { Link } from "react-router-dom"


const EnterPage = () => {
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
                        <div className="flex">
                            <button type="submit" className="black-btn">Enter</button>
                            <Link to="/signup">
                                <span className="yet">
                                    Don’t have an account yet? Sign up here
                                </span>
                            </Link>
                        </div>
                    </form>
                    <Link to="/reset">
                        <div className="mt16">Forgot your password? Reset here</div>
                    </Link>

                </div>
            </main>
        </div>
    )
}

export default EnterPage