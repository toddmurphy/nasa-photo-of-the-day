import React from 'react';

const Image = props => {
  return (
    <div>
      <h3>Image Title: {props.image.title}</h3>
      <p>Image HDUrl: {props.image.hdurl}</p>
      <p>Explanation: {props.image.explanation}</p>
      <p>Date: {props.image.date}</p>
    </div>
  );
};

export default Image;
