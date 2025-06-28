import Modal from "react-modal";
import style from "./ImageModal.module.css";

import { ModalImage } from "../App/App.types";

interface ImageModalProps {
  isOpen: boolean;
  image: ModalImage | null;
  onClose: () => void;
}

export default function ImageModal({
  isOpen,
  image,
  onClose,
}: ImageModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={style.modal}
      overlayClassName={style.overlay}
      ariaHideApp={false}
    >
      <div className={style.content}>
        {image ? (
          <>
            <img src={image.url} alt={image.alt} className={style.image} />
            <p className={style.text}>Author: {image.author}</p>
            <p className={style.text}>Likes: {image.likes}</p>
            <p className={style.text}>Description: {image.description}</p>
          </>
        ) : (
          <p className={style.text}>No image selected</p>
        )}
        <button onClick={onClose} className={style.closeButton}>
          Close
        </button>
      </div>
    </Modal>
  );
}
