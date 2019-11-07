import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.img`
  width: 60%;
  /* height: 400px; */
`;

const ImageContainer = styled.div`
  border: 2px solid green;
  /* margin: auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 7px;
  border: none;
  background: dodgerblue;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 2%;
`;

const ImageTitle = styled.h3`
  font-size: 2.4rem;
`;

const ExplanationTitle = styled.p`
  font-size: 1.4rem;
  border: 2px solid blue;
  width: 75%;
`;

const DateText = styled.p`
  font-size: 1.4rem;
`;

const Image = props => {
  return (
    <ImageContainer>
      <ImageTitle>Image Title: {props.title}</ImageTitle>
      <Button>Next Picture</Button>
      <Button>View Galaxy</Button>
      <ImageWrapper src={props.url} />
      <ExplanationTitle>Explanation: {props.explanation}</ExplanationTitle>
      <DateText>Date: {props.date}</DateText>
    </ImageContainer>
  );
};

export default Image;
