import Modal from "react-modal";
import style from "./ImageModal.module.css";

export default function ImageModal({ isOpen, image, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={style.modal}
      overlayClassName={style.overlay}
    >
      <div className={style.content}>
        <img src={image.url} alt={image.alt} className={style.image} />
        <p className={style.text}>Author: {image.author}</p>
        <p className={style.text}>Likes: {image.likes}</p>
        <p className={style.text}>Description: {image.description}</p>
        <button onClick={onClose} className={style.closeButton}>
          Close
        </button>
      </div>
    </Modal>
  );
}
