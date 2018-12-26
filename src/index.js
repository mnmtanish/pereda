import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { create } from './application';
import { Application } from './component/application';

const store = create({
  APP_NAME: 'Pereda',
});

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.register();
