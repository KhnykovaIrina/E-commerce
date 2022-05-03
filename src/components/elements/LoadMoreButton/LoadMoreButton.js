import React from 'react';
import './LoadMoreButton';

const LoadMoreButton = (props) => {
   const { isLoaded } = props
   return (
      <button onClick={props.loadMoreProducts} disabled={isLoaded} type="button" className="btn btn-outline-secondary col-3">
         Load more
      </button>
   );
};

export default LoadMoreButton;