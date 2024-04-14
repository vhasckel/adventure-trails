import Button from "../Button";

import styles from "./styles.module.css";

function Hero({ showElement, title, paragraph }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
        </div>
        {showElement && (
          <>
            <div className={styles.textContainer}>
              <p className={styles.text}>{paragraph}</p>
            </div>
            <div>
              <Button text={"Explorar trilhas"} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Hero;
