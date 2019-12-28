import React from 'react';

const Flat = ({ flat, selectedFlat }) => {
  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${flat.imageUrl})`
  };
  return (
    <div className={flat === selectedFlat ? 'card active' : 'card'} style={divStyle}>
      <div className="card-category">
        {flat.price}
        {flat.priceCurrency}
      </div>
      <div className="card-description">
        <h2>{flat.name}</h2>
      </div>
    </div>
  );
};

export default Flat;
