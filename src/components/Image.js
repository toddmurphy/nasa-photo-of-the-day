import React from 'react';

const Image = props => {
  return (
    <div>
      <h3>Image Title: {props.title}</h3>
      <p>Image HDUrl: {props.hdurl}</p>
      <p>Explanation: </p>
      <p>Date: {props.dated}</p>
    </div>
  );
};

export default Image;
