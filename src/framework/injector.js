import React from 'react';

export const InjectorContext = React.createContext(null);

export const Provide = props => (
  <InjectorContext.Provider value={props.injector}>{props.children}</InjectorContext.Provider>
);

export const inject = (Component, mapper) => props => (
  <InjectorContext.Consumer>{injector => <Component {...props} {...mapper(injector)} />}</InjectorContext.Consumer>
);
