import React from 'react';

const StyleIDContext = React.createContext({
  globalStyleID: 240500,
  globalSetStyleID: () => {}
});

function StyleIDProvider({ children }) {
  const [styleID, setStyleID] = React.useState(240500);

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