import ReactModal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ image, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTagret) onClose();
  };
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
      shouldCloseOnOverlayClick={true}
    >
      <div onClick={handleOverlayClick}>
        <img src={image.urls.regular} alt={image.alt_description} />
      </div>
    </ReactModal>
  );
};

export default ImageModal;
