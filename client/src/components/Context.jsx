import React from 'react';

export const ProductIDContext = React.createContext({
  globalProductID: 40493,
  globalSetProductID: () => {}
});

export default function ProductIDProvider({ children }) {
  const [productID, setProductID] = React.useState(40493);

  var context = {
    currentProductID: productID,
    setCurrentProductID: setProductID,
  };

  return <ProductIDContext.Provider value={context}>{children}</ProductIDContext.Provider>

}
