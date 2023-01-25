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
                    <img src={heroIllustration} alt="image mockups"  />
                    <div className="hero-img-bg"></div>
                </div>
            </div>
            </section>
            <Features />
            <section className="section section__extension">
                <div className="container">
                    <div className="section__extension-text">
                        <h2>Download the extension</h2>
                        <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
                        got a favourite you’d like us to prioritize.</p>
                    </div>
                    <div className="section__extension-cards">
                        <div className="section__extension-card">
                            <img src={logoChrome} alt="" />
                            <h4>Add to Chrome</h4>
                            <p>Minimum version 62</p>
                            <input type="button" value="Add & Install Extension" />
                        </div>
                        <div className="section__extension-card">
                            <img src={logoFirefox} alt="" />
                            <h4>Add to Firefox</h4>
                            <p>Minimum version 55</p>
                            <input type="button" value="Add & Install Extension" />
                        </div>
                        <div className="section__extension-card">
                            <img src={logoOpera} alt="" />
                            <h4>Add to Opera</h4>
                            <p>Minimum version 46</p>
                            <input type="button" value="Add & Install Extension" />
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