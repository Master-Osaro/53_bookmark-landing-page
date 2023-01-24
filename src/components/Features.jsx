import featureImage from '../images/illustration-features-tab-1.svg'
const Features =()=>{
    return (
        <div className="section section__features">
            <div className="container">
                <div className="features__text">
                    <h2>Features</h2>
                    <p> Our aim is to make it quick and easy for you to access your favourite websites. 
                        Your bookmarks sync between your devices so you can access them on the go.</p>
                </div>
                <div className="features__tabs">
                    <div className="features__tabs-header">
                        <h3>Simple Bookmarking</h3>
                        <h3>Speedy Searching</h3>
                        <h3>Easy Sharing</h3>
                    </div>
                    <div className="features__tabs-content">
                        <div className="features__tabs-content--image">
                            <img src={featureImage} alt="" />
                        </div>
                        <div className="features__tabs-content--text">
                            <h2>Bookmark in one click</h2>
                            <p>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;