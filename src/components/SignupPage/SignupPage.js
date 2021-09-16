import React from "react"
import './SignupPage.css'
import Header from "../Header"
import { Link } from "react-router-dom"


const SignupPage = () => {
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
                            <button type="submit" className="black-btn">Sign up</button>
                            <Link to="/enter">
                                <span className="yet">
                                Already hav an account? Enter here
                                </span>
                            </Link>
                        </div>
                    </form>
                    <div className="mt16">By signing up you agree to the Privacy Policy</div>

                </div>
            </main>
        </div>
    )
}

export default SignupPage