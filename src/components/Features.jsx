import featureImage from '../images/illustration-features-tab-1.svg'
import { featuresTabs } from '../data/data'
import { useState } from 'react'
const Features =()=>{
    const [currentFeatureNum, setCurrentFeatureNum] = useState(0)
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
                        {featuresTabs.headers.map((headerTab, index)=>{
                            return <p key={index} onClick={()=>{setCurrentFeatureNum(index)}} className={`${index==currentFeatureNum?'features__tabs-header--active':''}`}>{headerTab}</p>
                        })}
                    </div>
                    <div className="features__tabs-content">
                        <div className="features__tabs-content--image">
                            <img src={featuresTabs.content[currentFeatureNum].image} alt="" />
                        </div>
                        <div className="features__tabs-content--text">
                            <h2>{featuresTabs.content[currentFeatureNum].title}</h2>
                            <p>{featuresTabs.content[currentFeatureNum].text}</p>
                            <button className='btn btn-blue'>{featuresTabs.content[currentFeatureNum].btnText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;