import Button from "../Button";

import styles from "./styles.module.css";

function Hero({ showElement, title, paragraph }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{title}</h1>
        {showElement && (
          <>
            <p className={styles.text}>{paragraph}</p>
            <Button />
          </>
        )}
      </div>
    </div>
  );
}

export default Hero;
