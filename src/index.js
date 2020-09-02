import React from 'react';
import ReactDOM from 'react-dom';
import './index.css.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './data/store'
import { ReactQueryConfigProvider } from 'react-query'


const store = configureStore();

const queryConfig = {
  shared: {
    suspense: true,
  },
}

ReactDOM.render(
  <ReactQueryConfigProvider config={queryConfig}>
    <Provider store={store}>
      <App />
    </Provider>
  </ReactQueryConfigProvider>,
  document.getElementById('root')
);


serviceWorker.unregister();
