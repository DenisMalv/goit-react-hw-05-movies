import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import { ModalWindow, Overlay } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ largeImage, onClose }) => {
  const handleCloseModal = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      onClose();
    }
  };
  useEffect(() => {
    window.addEventListener('keydown', handleCloseModal);
    return () => {
      window.removeEventListener('keydown', handleCloseModal);
    };
  });

  return createPortal(
    <Overlay onClick={handleCloseModal}>
      <ModalWindow>
        <img src={largeImage} alt="" />
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: propTypes.func.isRequired,
  largeImage: propTypes.string.isRequired,
};

export default Modal;
