import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import './index.css';
import ErrorCatch from './components/ErrorCatch';
import Feed from './components/Feed';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ErrorCatch>
      <Feed />
    </ErrorCatch>
  </Provider>
);

export default App;
