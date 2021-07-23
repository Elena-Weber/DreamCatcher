import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import App from './App';
import dreamsReducer from './reducers/dreamsReducer';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';

document.addEventListener("click", (event) => {
  console.log("You've Just Clicked on ", event.target)
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// let store = createStore(dreamsReducer, composeEnhancers(applyMiddleware(thunk)));
let store = createStore(dreamsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();