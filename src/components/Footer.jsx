import logo from '../images/logo-bookmark-white.svg'
import facebookIcon from '../images/icon-facebook.svg'
import twitterIcon from '../images/icon-twitter.svg'
import errorIcon from '../images/icon-error.svg'
import { isValid } from '../utils/validation'
import { useState } from 'react'
const Footer =()=>{
    const [email, setEmail] =  useState("");
    const [valid, setValid] =  useState(true);
    return (
        <footer className="section section__footer">
            <div className="section__footer-form">
                <div className="container">
                    <p>35,000+ already joined</p>
                    <h2>Stay up-to-date with what we’re doing</h2>
                    <form action="" onSubmit={(e)=>{e.preventDefault()}}>
                        <div className={`input-group ${!valid?"error":email?"success":""}`}>
                            <input type="text" placeholder='Enter your email Address' id='email' onChange={(e)=>{setEmail(e.target.value)}} />
                            {valid?"": <div className="error-icon__wrapper"><img src={errorIcon} alt="error" className="error-icon" /></div>}
                            <label htmlFor="email">{valid?email?"Thank you! You'll hear from us soon":"" :"Whoops? Make sure its an email"}</label>
                        </div>
                        
                        <button className='btn btn-primary' onClick={()=>{isValid(email)?setValid(true):setValid(false)}}>Contact Us</button>
                    </form>
                    
                </div>
            </div>
            <div className="section__footer-links">
                <div className="container">
                <nav>
                    <div className="wrapper__logo-list">
                        <div className="logo"><img src={logo} alt="" /></div>
                        <div className="footer-list__container" id="footer-list__container">
                            <div className="footer__nav-list">
                                <a href="#features" className="nav-link">Features</a>
                                <a href="#pricing" className="nav-link">Pricing</a>
                                <a href="#contact" className="nav-link">Contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="socials__wrapper">
                        <a href="#facebook" aria-label="Facebook Link"><img src={facebookIcon} alt="" /></a>
                        <a href="#twitter" aria-label="Twitter Link"><img src={twitterIcon} alt="" /></a>
                    </div>
                </nav>
                </div>
                </div>
        </footer>
    )
}

export default Footer;