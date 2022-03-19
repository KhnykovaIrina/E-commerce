import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ accordionData }) => {
   const [selected, setSelected] = useState(null);

   return (
      <div>
         <h3>Order Infomation</h3>
         <div className="accordion">
            {accordionData.map((item, i) => (
               <div key={i} className="item">
                  <div className="accordion-title" key={i} onClick={() => setSelected(i)}>
                     <p>{item.title}</p>
                     <span>{selected === i ? '-' : '+'}</span>
                  </div>
                  <div className={selected === i ? 'accordion-show ' : 'accordion-content'}>{item.content}</div>
               </div>
            ))}
         </div>
      </div>
   );
};


export default Accordion;