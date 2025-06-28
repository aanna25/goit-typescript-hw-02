import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

import { Image } from "../App/App.types";

interface ImageGalleryProps {
  images: Image[];
  onImageClick: (image: Image) => void;
}

export default function ImageGallery({
  images,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={style.list}>
      {images.map((image) => (
        <li key={image.id} className={style.listItem}>
          <ImageCard image={image} onClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
}
