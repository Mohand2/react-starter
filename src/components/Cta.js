import React from 'react';

function Cta(props) {
  return (
    <div className="modal" style={{ color: props.color }}>
      <h1>Rendred from children: {props.title}</h1>
      {props.children}
    </div>
  );
}

export default Cta;
