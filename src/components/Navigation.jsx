import logo from '../images/logo-bookmark.svg'
const Navigation =()=>{
    return (
        <header>
            <nav>
                <div className="logo"><img src={logo} alt="" /></div>
                <div className="nav-list__container" id="nav-list__container">
                    <div className="nav-list">
                    <a href="" className="nav-link">Features</a>
                    <a href="" className="nav-link">Pricing</a>
                    <a href="" className="nav-link">Contact</a>
                    </div>
                    <div className="btn__wrapper">
                        <input type="button" className="btn btn-primary" value="Login" />
                    </div>
                </div>
            </nav>
        </header>
        
    )
}

export default Navigation;