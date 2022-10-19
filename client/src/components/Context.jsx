import React from 'react';

const ProductIDContext = React.createContext({
  globalProductID: 40346,
  globalSetProductID: () => {},
});

function ProductIDProvider({ children }) {
  const [productID, setProductID] = React.useState(40346);

  var context = {
    currentProductID: productID,
    setCurrentProductID: setProductID,
  };

  return (
    <ProductIDContext.Provider value={context}>
      {children}
    </ProductIDContext.Provider>
  );
}

export { ProductIDContext, ProductIDProvider };
