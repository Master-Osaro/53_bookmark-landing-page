import logo from '../images/logo-bookmark.svg'
import logoWhite from '../images/logo-bookmark-white.svg'
import menuIcon from '../images/icon-hamburger.svg'
import menuIconClose from '../images/icon-close.svg'
import facebookIcon from '../images/icon-facebook.svg'
import twitterIcon from '../images/icon-twitter.svg'
import { useState } from 'react'
const Navigation =()=>{
    const [navOpen, setNavOpen] = useState(false)
    return (
        <header>
            <nav>
                <div className="logo"><img src={navOpen?logoWhite:logo} alt="" /></div>
                <div className="menu-icon" onClick={()=>{setNavOpen(!navOpen)}}><img src={navOpen?menuIconClose:menuIcon} alt="" /></div>
                <div className={`nav-list__container ${navOpen?"":"hide"}`} id="nav-list__container" >
                    <div className="nav-list">
                        <a href="#features" className="nav-link">Features</a>
                        <a href="#pricing" className="nav-link">Pricing</a>
                        <a href="#contact" className="nav-link">Contact</a>
                        <div className="btn__wrapper">
                            <input type="button" className="btn btn-primary btn-login" value="Login" />
                        </div>
                    </div>
                    <div className="socials__wrapper">
                        <a href="#facebook" aria-label="Facebook Link"><img src={facebookIcon} alt="" /></a>
                        <a href="#twitter" aria-label="Twitter Link"><img src={twitterIcon} alt="" /></a>
                    </div>
                    
                </div>
            </nav>
        </header>
        
    )
}

export default Navigation;