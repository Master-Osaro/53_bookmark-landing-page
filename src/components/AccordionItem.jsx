import React, { useState } from 'react';
const AccordionItem = ({title,info}) => {
  const [showInfo, setShowInfo] = useState(false);
  const softRedColor = '#fa5757';
  const softBlueColor = '#5267DF';
  return <>
    <div className={`accordion-item ${showInfo && "accordion-item--active"}`} onClick={()=>setShowInfo(!showInfo)}>
      <div className="accordion-item--header">
          <h4>{title}</h4>
          <button className="accordion-item--header__btn" >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" className='arrowIcon'>
            <path fill="none" stroke={`${showInfo?softRedColor:softBlueColor}`} strokeWidth="3" d="M1 1l8 8 8-8"/>
          </svg>
          </button>
      </div>
      {showInfo && <div className="accordion-item--text">
          <p>{info}</p>
      </div>}
      
    </div>
    
  </>
};

export default AccordionItem;
