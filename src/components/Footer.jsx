import logo from '../images/logo-bookmark.svg'
const Footer =()=>{
    return (
        <footer className="section section__footer">
            <div className="container">
                <div className="section__footer-form">
                    <p>35,000+ already joined</p>
                    <h2>Stay up-to-date with what we’re doing</h2>
                    <input type="text" /><button>Contact Us</button>
                </div>
                <div className="section__footer-links">
                <nav>
                    <div className="logo"><img src={logo} alt="" /></div>
                    <div className="nav-list__container" id="nav-list__container">
                        <div className="nav-list">
                        <a href="" className="nav-link">Features</a>
                        <a href="" className="nav-link">Pricing</a>
                        <a href="" className="nav-link">Contact</a>
                        </div>
                        <div className="links__wrapper">
                        </div>
                    </div>
                </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;