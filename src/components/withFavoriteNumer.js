import React from 'react';

function withFavoriteNumer(component) {
  const Component = component;

  return function (props) {
    return <Component number={5} {...props} />;
  };
}

export default withFavoriteNumer;
