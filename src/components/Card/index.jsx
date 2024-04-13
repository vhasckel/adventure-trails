import { CiHeart, CiStar } from "react-icons/ci";

import styles from "./styles.module.css";

function Card({
  trailName,
  location,
  timeInMinutes,
  routeSize,
  level,
  type,
  authorname,
  imageURL,
}) {
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
                {trailName} - {location}
              </h3>
            </div>
            <CiHeart size={28} />
          </div>

          <div className={styles.author}>
            <h5>Por: {authorname}</h5>
          </div>

          <div className={styles.info}>
            <div className={styles.time}>
              <p>Duração: {timeInMinutes}mn </p>
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
              <CiStar size={28} />
              <CiStar size={28} />
              <CiStar size={28} />
              <CiStar size={28} />
              <CiStar size={28} />
            </div>
            <span>Avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
