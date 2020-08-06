import React from 'react';
import ReactDOM from 'react-dom';
import './index.css.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider, connect } from 'react-redux'
import configureStore from './data/store'
import { fetchBudget, fetchBudgetedCategories } from 'data/actions/budget.acions';

const store = configureStore();

const ConnectedApp = connect(state => {
  return {
    budget: state.budget.budget,
  }
}, {
  fetchBudget, fetchBudgetedCategories,
})(App)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
