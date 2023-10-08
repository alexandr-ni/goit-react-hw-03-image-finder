import { ModalW, Overlay } from './Modal.styled';

export const Modal = ({ largeImg, isOpen, onClick, onRequestClose }) => {
  return (
    <Overlay isOpen={isOpen} onRequestClose={onRequestClose}>
      <ModalW>
        <img src={largeImg} onClick={onClick} />
      </ModalW>
    </Overlay>
  );
};
