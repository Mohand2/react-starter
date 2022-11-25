import React from 'react';

function card({ imgSrc, title }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <a href={`www.${title}.com`} target="_blank">{`Visit ${title}`}</a>
    </div>
  );
}

export default card;
