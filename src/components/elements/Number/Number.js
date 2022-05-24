import React, { useState } from 'react';
import './Number.css';

const Number = ({ min, max, count, handlerCountChange }) => {

   const onIncrement = () => {
      if (count < max) {
         handlerCountChange(count + 1);
      }
   }

   const onDecrement = () => {
      if (count > min) {
         handlerCountChange(count - 1);
      }
   }

   const countChange = (e) => {
      if (e.target.value > max) {
         handlerCountChange(max)
      } else if (e.target.value < min) {

         handlerCountChange(min);
      } else {
         handlerCountChange(+(e.target.value));
      }
   }

   return (
      <div className="col-5">
         <p className="text-muted fs-5 mb-2">Quantity</p>
         <div className="counter-wrapper ">
            <button id="decrement" className="button btn-lg" onClick={onDecrement} disabled={count === min}>-</button>
            <input className="input" value={count} onChange={countChange} />
            <button id="increment" className="button btn-lg" onClick={onIncrement} disabled={count === max}>+</button>
         </div>
      </div>
   );
};

export default Number;