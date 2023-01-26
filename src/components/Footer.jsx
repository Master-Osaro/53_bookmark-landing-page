import logo from '../images/logo-bookmark-white.svg'
import facebookIcon from '../images/icon-facebook.svg'
import twitterIcon from '../images/icon-twitter.svg'
const Footer =()=>{
    return (
        <footer className="section section__footer">
            <div className="section__footer-form">
                <div className="container">
                    <p>35,000+ already joined</p>
                    <h2>Stay up-to-date with what we’re doing</h2>
                    <form action="">
                        <input type="text" placeholder='Enter your email Address' required/><button className='btn btn-primary'>Contact Us</button>
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