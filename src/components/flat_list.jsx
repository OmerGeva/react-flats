import React from 'react';
import Flat from './flat';

const FlatList = ({ flats, selectedFlat }) => {
  return (
    <div className="flat-list">
      { flats.map((flat, index) => <Flat flat={flat} key={index} selectedFlat={selectedFlat} />) }
    </div>
  );
};

export default FlatList;
