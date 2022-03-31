import React, { useState } from 'react';
import './Number.css';

const Number = ({ min, max, INITIAL_NUMBER }) => {
   const [count, setCount] = useState(INITIAL_NUMBER);

   const onIncrement = () => {
      if (count < max) {
         setCount(count + 1);
      }
   }

   const onDecrement = () => {
      if (count > min) {
         setCount(count - 1);
      }
   }

   const inputChange = (e) => {
      if (e.target.value > max) {
         setCount(max);
      } else if (e.target.value < min) {
         setCount(min);
      } else {
         setCount(+(e.target.value));
      }
   }

   return (
      <div className="counter">
         <p className="title">Quantity</p>
         <div className="counter-wrapper">
            <button id="decrement" className="button" onClick={onDecrement} disabled={count === min}>-</button>
            <input className="input" value={count} onChange={inputChange} />
            <button id="increment" className="button" onClick={onIncrement} disabled={count === max}>+</button>
         </div>
      </div>
   );
};

export default Number;