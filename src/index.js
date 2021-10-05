import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import dreamsReducer from './reducers/dreamsReducer';
import './index.css';
import reportWebVitals from './reportWebVitals';

document.addEventListener("click", (event) => {
  console.log("You've Just Clicked on ", event.target)
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// creating the redux store to feed to provider
let store = createStore(dreamsReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();