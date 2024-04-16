import { Link } from "react-router-dom";
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
              <Link to="/explorar-trilhas">
                <Button text={"Explorar trilhas"} />
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Hero;
