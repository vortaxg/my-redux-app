import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import todoApp from './reducers'
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp);
window.store = store;
ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));
registerServiceWorker();
