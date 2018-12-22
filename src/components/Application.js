import React from 'react';
import { inject } from '../framework/injector';

export const ApplicationUI = props => <p>Hello {props.name}!</p>;

export const Application = inject(ApplicationUI, injector => ({
  name: injector.appConfig.name,
}));
