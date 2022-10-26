import React, { useState } from 'react';

const SellerResponse = ({ review }) => {
  const [showResponse, setShowResponse] = useState(false);
  const [partialMessage, setPartialMessage] = useState(
    review.body.substring(0, 250)
  );
  const handleShowResponse = () => {
    setShowResponse(!showResponse);
  };

  return (
    <>
      <div>
        {!showResponse ? (
          <>
            {review.body.length > 250 ? (
              <>
                <p>{partialMessage}</p>
                <div
                  className='show-more-body'
                  onClick={() => {
                    setPartialMessage(review.body);
                  }}
                >
                  Show more...
                </div>
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
