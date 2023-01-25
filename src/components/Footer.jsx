import logo from '../images/logo-bookmark-white.svg'
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