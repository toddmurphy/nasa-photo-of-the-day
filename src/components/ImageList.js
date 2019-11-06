import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from '../components/Image';

const ImageList = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=rpCnWzJ5bMqSJf9V6NLhEExKWSNTno3XE8Q6gUs3')
      .then(response => {
        console.log(response.data);
        setImage(response.data); //setImages assigns response.data to useState empty array which gets set to 'images' to map over
      })
      .catch(error => {
        console.log('You did not return any images', error);
      });
  }, []); //MUST add empty array dependency to avoid infinite loop

  return (
    <div>
      <Image image={image} />;
    </div>
  );
};

export default ImageList;
