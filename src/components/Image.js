import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.img`
  width: 60%;
  margin-bottom: 2%;
  box-shadow: 0 20px 25px -5px;
  /* height: 400px; */
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-around;
  padding: 2% 0;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 7px;
  border: none;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 2%;

  ${props => (props.type === 'primary' ? `background: dodgerblue;` : null)}
  ${props => (props.type === 'secondary' ? `background: salmon;` : null)}
  ${props => (props.type === 'neutral' ? ` background: black;` : null)}
`;

const ImageTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
`;

const ExplanationTitle = styled.p`
  font-size: 1.4rem;
  width: 75%;
`;

const DateText = styled.p`
  font-size: 1.4rem;
  margin-top: 8%;
`;

const Image = props => {
  return (
    <ImageContainer>
      <ImageTitle>Image Title: {props.title}</ImageTitle>
      <ButtonContainer>
        <Button type="primary">Next Picture</Button>
        <Button type="secondary">View Galaxy</Button>
      </ButtonContainer>
      <ImageWrapper src={props.url} />
      <Button type="neutral">View Description</Button>
      <ExplanationTitle>Explanation: {props.explanation}</ExplanationTitle>
      <DateText>Date: {props.date}</DateText>
    </ImageContainer>
  );
};

export default Image;
