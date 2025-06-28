import ImageCard from "../ImageCard/ImageCard";
import style from "./ImageGallery.module.css";

import { UnsplashImage } from "../App/App.types";

interface ImageGalleryProps {
  images: UnsplashImage[];
  onImageClick: (image: UnsplashImage) => void;
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
