import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import styles from "./styles.module.css";
import { useState } from "react";

function Card({
  trailName,
  city,
  state,
  timeInMinutes,
  routeSize,
  level,
  type,
  authorname,
  imageURL,
}) {
  const [rating, setRating] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  const handleRatingChange = (event, newValue) => {
    setRating(newValue); // Atualiza o estado de rating
  };
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={imageURL} alt="" />
        </div>

        <div className={styles.column}>
          <div className={styles.title}>
            <div>
              <h3>
                {trailName} - {city}, {state}
              </h3>
            </div>
            <IconButton aria-label="favorite" onClick={handleFavoriteClick}>
              {isFavorited ? (
                <FavoriteIcon color="error" />
              ) : (
                <FavoriteBorderIcon />
              )}
            </IconButton>
          </div>

          <div className={styles.author}>
            <h5>Por: {authorname}</h5>
          </div>

          <div className={styles.info}>
            <div className={styles.time}>
              <p>Duração: {timeInMinutes}min </p>
              <p>Trajeto: {routeSize}km</p>
            </div>
            <div className={styles.level}>
              <span>
                {" "}
                {level} {type}{" "}
              </span>
            </div>
          </div>

          <div className={styles.rating}>
            <div>
              <Rating
                name="controlled-rating"
                value={rating} // Usa o estado para definir o valor das estrelas
                onChange={handleRatingChange} // Atualiza o estado quando a classificação muda
              />
            </div>
            <span>Avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
