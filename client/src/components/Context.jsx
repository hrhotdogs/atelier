import React from 'react';

export const ProductIDContext = React.createContext({
  globalProductID: 40493,
  globalSetProductID: () => {}
});

// ***** some changes on feature-RP-DEV *****
export default function ProductIDProvider ({ children }) {
  const [ productID, setProductID ] = React.useState(40493);

  var context = {
    globalProductID: productID,
    setGlobalProductID: setProductID
  };

  return <ProductIDContext.Provider value={context}>{children}</ProductIDContext.Provider>
}

// ***** some changes on feature-RP-DEV *****
// export default CurrentInfo;