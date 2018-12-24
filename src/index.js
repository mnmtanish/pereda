import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { create } from './application';
import { Application } from './component/Application';

const store = create({
  APP_NAME: 'Pereda',
});

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);
