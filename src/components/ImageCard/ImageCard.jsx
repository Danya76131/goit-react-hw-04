import s from "./ImageCard.module.css";

const ImageCard = ({ image, onClick }) => {
  const handleClick = () => onClick(image);
  return (
    <div className={s.card} onClick={handleClick}>
      <img
        className={s.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageCard;
