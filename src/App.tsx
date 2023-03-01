
import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { RootNavigator } from './navigation/rootNavigator';
import { store } from './repository';
;

export const App:FC = () => {

  return (
    <Provider store={store}>
      <RootNavigator/>
      </Provider>
  );
};

// c4b47144f8d97d57e6a1ccfee92d4cb3dde0a6ce09dd97434b2c1a5fcf4f74fc

// 987d88af-84bc-48e7-a808-e4ba33bee93f