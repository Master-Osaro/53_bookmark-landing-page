import React, { useState } from 'react';
import arrowIcon from '../images/icon-arrow.svg'
const AccordionItem = ({title,info}) => {
  const [showInfo, setShowInfo] = useState(false);
  return <>
    <div className={`accordion-item ${showInfo && "accordion-item--active"}`} onClick={()=>setShowInfo(!showInfo)}>
      <div className="accordion-item--header">
          <h4>{title}</h4>
          <button className="accordion-item--header__btn" ><img src={arrowIcon} alt="" /></button>
      </div>
      {showInfo && <div className="accordion-item--text">
          <p>{info}</p>
      </div>}
      
    </div>
    
  </>
};

export default AccordionItem;
