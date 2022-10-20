import React, { useState } from 'react';

const SellerResponse = ({ review }) => {
  const [showResponse, setShowResponse] = useState(false);

  const handleShowResponse = () => {
    setShowResponse(!showResponse);
  };

  const partialMessage = review.body.substring(0, 250);

  return (
    <>
      <div>
        {!showResponse ? (
          <>
            {review.body.length > 250 ? (
              <>
                <p>{partialMessage}</p>
                <button onClick={() => <p>{review.body}</p>}>
                  Show more...
                </button>
              </>
            ) : (
              <p>{review.body}</p>
            )}
          </>
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
