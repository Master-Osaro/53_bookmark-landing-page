import heroIllustration from '../images/illustration-hero.svg'
import logoChrome from '../images/logo-chrome.svg'
import logoFirefox from '../images/logo-firefox.svg'
import logoOpera from '../images/logo-opera.svg'
import FAQ from './FAQ';
import Features from './Features';
import Footer from './Footer';
const Home =()=>{
    return (
        <main>
            <section className="section section__hero">
            <div className="container">
                <div className="section__hero-text">
                <h1>A Simple Bookmark Manager</h1>
                <p> A clean and simple interface to organize your favourite websites. Open a new 
                    browser tab and see your sites load instantly. Try it for free.</p>
                    <div className="btn__wrapper">
                        <input type="button" className="btn btn-blue" value="Get it on Chrome" />
                        <input type="button" className="btn btn-white" value="  Get it on Firefox" />
                    </div>
                    
                </div>
                <div className="section__hero-img">
                    <img src={heroIllustration} alt="An illustration showing a bookmark manager"  />
                    <div className="hero-img-bg"></div>
                </div>
            </div>
            </section>
            <Features />
            <section className="section section__extension" id='pricing'>
                <div className="container">
                    <div className="section__extension-text">
                        <h2>Download the extension</h2>
                        <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                        got a favourite you’d like us to prioritize.</p>
                    </div>
                    <div className="section__extension-cards">
                        <div className="section__extension-card section__extension-card-1">
                            <div className="img__wrapper"><img src={logoChrome} alt="chrome" /></div> 
                            <h4>Add to Chrome</h4>
                            <p>Minimum version 62</p>
                            <div className="dotted-divider"></div>
                            <div className="btn__wrapper"><input className="btn btn-blue" type="button" value="Add & Install Extension" /></div>
                            
                        </div>
                        <div className="section__extension-card section__extension-card-2">
                            <div className="img__wrapper"><img src={logoFirefox} alt="firefox" /></div>
                            <h4>Add to Firefox</h4>
                            <p>Minimum version 55</p>
                            <div className="dotted-divider"></div>
                            <div className="btn__wrapper"><input className="btn btn-blue" type="button" value="Add & Install Extension" /></div>
                        </div>
                        <div className="section__extension-card section__extension-card-3">
                            <div className="img__wrapper"><img src={logoOpera} alt="opera" /></div>
                            <h4>Add to Opera</h4>
                            <p>Minimum version 46</p>
                            <div className="dotted-divider"></div>
                            <div className="btn__wrapper"><input className="btn btn-blue" type="button" value="Add & Install Extension" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <FAQ />
            <Footer />
        </main>
    )
}

export default Home;