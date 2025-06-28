import style from "./ImageCard.module.css";
import type { Image } from "../App/App.types";

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
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
