import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImageClick }) {
  return (
    <ul className={style.list}>
      {images.map((image) => (
        <li key={image.id} className={style.listItem}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
}
