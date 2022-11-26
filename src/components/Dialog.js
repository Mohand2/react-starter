import React from 'react';

function Dialog(props) {
  return <div>{props.render(true)}</div>;
}

export default Dialog;
