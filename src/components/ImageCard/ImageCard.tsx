import style from "./ImageCard.module.css";
import type { UnsplashImage } from "../App/App.types";

interface ImageCardProps {
  image: UnsplashImage;
  onClick: (image: UnsplashImage) => void;
}

export default function ImageCard({ image, onClick }: ImageCardProps) {
  return (
    <div className={style.card} onClick={() => onClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={style.image}
      />
    </div>
  );
}
