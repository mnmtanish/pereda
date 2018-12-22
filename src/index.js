import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Application } from './components/Application';
import { Provide } from './framework/injector';

const injector = {
  appConfig: { name: 'Pereda' },
};

ReactDOM.render(
  <Provide injector={injector}>
    <Application />
  </Provide>,
  document.getElementById('root'),
);
