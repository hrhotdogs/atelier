import React from 'react';

const StyleIDContext = React.createContext({
  globalStyleID: 240525,
  globalSetStyleID: () => {}
});

function StyleIDProvider({ children }) {
  const [styleID, setStyleID] = React.useState(240525);

  var context = {
    currentStyleID: styleID,
    setCurrentStyleID: setStyleID,
  };

  return (
    <StyleIDContext.Provider value={context}>
      {children}
    </StyleIDContext.Provider>
  );
}

export { StyleIDContext, StyleIDProvider };