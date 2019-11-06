import React from 'react';

const Image = props => {
  return (
    <div>
      <h3>Image Title: {props.title}</h3>
      <img src={props.url} />
      <p>Explanation: {props.explanation}</p>
      <p>Date: {props.date}</p>
    </div>
  );
};

export default Image;
