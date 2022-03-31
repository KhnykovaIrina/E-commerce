import React, { useState } from 'react';
import './Select.css';

const Select = ({ options, defaultValue }) => {

   const [sizevalue, setValue] = useState('')

   function changeSelect(event) {
      setValue(event.target.value);
   }

   return (
      <div>
         <select
            value={sizevalue}
            className="form-select"
            onChange={changeSelect}
            selected
         >
            <option>{defaultValue}</option>
            {options.map((option) => (
               <option key={option.value} value={option.value} >{option.label}</option>
            ))}
         </select>
      </div>
   );
};

export default Select;
