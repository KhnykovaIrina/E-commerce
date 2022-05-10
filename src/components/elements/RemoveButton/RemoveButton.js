import React from 'react';
import './RemoveButton.css';

const RemoveButton = (props) => {
   console.log(props)
   const { item,deleteItem } = props
   return (
      <div className="col-4 col-md-5 d-flex d-flex justify-content-end ">
         <button onClick={()=>deleteItem(item)} type="button" className="remove-button text-decoration-underline align-self-end  mb-0 ">
            Remove
         </button>
      </div>
   );
};

export default RemoveButton;