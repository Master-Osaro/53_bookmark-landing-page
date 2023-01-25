import AccordionItem from './AccordionItem';
import { accordions } from '../data/data';
import { useState } from 'react';

const FAQ =()=>{
    const [accordionItems, setAccordionItems] = useState(accordions)
    return (
        <section className="section section__faq">
            <div className="container">
                <div className="section__extension-text">
                    <h2>Frequently Asked Questions</h2>
                    <p>  Here are some of our FAQs. If you have any other questions you’d like 
                    answered please feel free to email us.</p>
                </div>
                <div className="section__accordion">
                    {
                        accordionItems.map((accordionItem)=>{
                            return <AccordionItem key={accordionItem.id} {...accordionItem}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default FAQ;