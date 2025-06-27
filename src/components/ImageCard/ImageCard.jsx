import style from "./ImageCard.module.css";

export default function ImageCard({ image, onClick }) {
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
