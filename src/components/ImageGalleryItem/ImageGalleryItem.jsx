import React from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import propTypes from 'prop-types';

const ImageGalleryItem = ({
  largeImage,
  smalImage,
  toggleModal,
  modalImage,
}) => {
  return (
    <Item>
      <Image
        src={smalImage}
        alt="#"
        onClick={() => {
          toggleModal();
          modalImage(largeImage);
        }}
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  largeImage: propTypes.string.isRequired,
  smalImage: propTypes.string.isRequired,
  toggleModal: propTypes.func.isRequired,
  modalImage: propTypes.func.isRequired,
};

export default ImageGalleryItem;
