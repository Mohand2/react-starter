import React from 'react';

function Cta(props) {
  return (
    <div className="modal" style={{ color: props.color }}>
      {props.children}
    </div>
  );
  
}

export default Cta;
