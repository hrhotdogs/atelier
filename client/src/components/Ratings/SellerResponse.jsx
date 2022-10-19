import React, { useState } from 'react';

const SellerResponse = ({ review }) => {
  const [showResponse, setShowResponse] = useState(false);

  const handleShowResponse = () => {
    setShowResponse(!showResponse);
  };
  return (
    <>
      <div>
        {!showResponse ? (
          <p>{review.body}</p>
        ) : (
          <>
            <p>{review.body}</p>
            <p>{review.response}</p>
          </>
        )}
      </div>

      {review.response !== null ? (
        <a onClick={handleShowResponse} className='seller-response'>
          {!showResponse ? 'See response from seller' : 'Hide response'}
        </a>
      ) : null}
    </>
  );
};

export default SellerResponse;
