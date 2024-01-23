import React, { useState } from "react";
import "../style/style.css"
import img from "../Assets/Main1.png"
import { Link } from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from "react-icons/fa"
import { SigupValidate } from "./formValidate"
import { FaMoon, FaSun } from "react-icons/fa";
function Signup() {
    const browser = sessionStorage.getItem("darkmode") === "true";

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const [Error, setError] = useState({})

    const [Dark, setDark] = useState(browser)

    const [status, setStatus] = useState(false)

    const formSubmit = (e) => {
        e.preventDefault();
        const result = SigupValidate(Name, Email, Password);
        setError(result);
    }

    const togglePassword = () => {
        setStatus(!status)
    }

    const Darkmode = () => {
        sessionStorage.setItem("darkmode", true);
        setDark(true)
    }
    const lightmode = () => {
        sessionStorage.setItem("darkmode", false);
        setDark(false)
    }

    return (
        <>
            <div className="screen">
                <div className="left">
                    <img src={img} alt="img" />
                </div>
                <div className={`right ${Dark ? "data-theme" : ""}`}>

                    <div className="dark-mode">
                        {Dark ? <FaSun className="sun" onClick={lightmode} /> : <FaMoon className="moon" onClick={Darkmode} />}
                    </div>

                    <div className="header">
                        <p className="line"></p>
                        <p className="title">Let's Get Started !</p>
                    </div>

                    <p className="sub-title">Signup for free & start exploring</p>

                    <center>
                        <form className="form" onSubmit={formSubmit} noValidate autoComplete="off">
                            <h1 className="form-title signup-title">SIGNUP</h1>

                            <div className="field">
                                <input type="text" className="input-field" id="name" value={Name} onChange={(e) => { setName(e.target.value) }} placeholder="Name" />
                                <p className="error">{Error.nameError}</p>
                            </div>

                            <div className="field">
                                <input type="email" className="input-field" id="email" value={Email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                                <p className="error">{Error.emailError}</p>
                            </div>

                            <div className="password field">
                                <input type={status ? "text" : "password"} className="input-field" id="pass" value={Password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                                {status ? <IoEye className="eye" onClick={togglePassword} /> : <IoEyeOff className="eye" onClick={togglePassword} />}
                                <p className="error">{Error.PasswordError}</p>
                            </div>

                            <input type="submit" className="submit-btn btn2" value="Signup" />

                            <p className="or">Or</p>

                        </form>

                        <div className="social-login">
                            <button className='google-login google'><FcGoogle className='google-logo' />Continue with Google</button><br />
                            <button className='google-login'><FaFacebook className='google-logo facebook' />Continue with Facebook</button>
                        </div>

                        <div className="bottom">
                            <p className="center">Already have an account ? <Link to={"/"} className="link"> Login</Link></p>
                        </div>
                    </center>

                </div>

            </div>


        </>
    );
}

export default Signup;