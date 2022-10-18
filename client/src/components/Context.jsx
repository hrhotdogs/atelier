import React from 'react';

const ProductIDContext = React.createContext({
<<<<<<< HEAD
  globalProductID: 40493,
  globalSetProductID: () => {},
=======
  globalProductID: 40344,
  globalSetProductID: () => {}
>>>>>>> main
});

function ProductIDProvider({ children }) {
  const [productID, setProductID] = React.useState(40344);

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
