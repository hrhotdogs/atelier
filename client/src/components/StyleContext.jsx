import React from 'react';

export const StyleIDContext = React.createContext({
  globalStyleID: 40493,
  globalSetStyleID: () => {},
});

export default function StyleIDProvider({ children }) {
  const [styleID, setStyleID] = React.useState(240525);

  var context = {
    globalStyleID: styleID,
    setGlobalStyleID: setStyleID,
  };

  return (
    <StyleIDContext.Provider value={context}>
      {children}
    </StyleIDContext.Provider>
  );
}
