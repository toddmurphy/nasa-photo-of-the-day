import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.img`
  width: 40%;
  /* height: 400px; */
`;

const ImageContainer = styled.div`
  border: 2px solid green;
  width: 50%;
  margin: auto;
`;

const Image = props => {
  return (
    <ImageContainer>
      <h3>Image Title: {props.title}</h3>
      <ImageWrapper src={props.url} />
      <p>Explanation: {props.explanation}</p>
      <p>Date: {props.date}</p>
    </ImageContainer>
  );
};

export default Image;
