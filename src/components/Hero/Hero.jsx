import Button from "../Button";
import styles from "./styles.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Que tal aproveitar um tempo com a natureza?</h1>
        <p>
          Junte-se à comunidade de entusiastas ao ar livre, compartilhe suas
          aventuras e inspire-se com as experiências de outros aventureiros.
          Prepare-se para explorar novos horizontes e se conectar com a natureza
          através do Adventure Trails!
        </p>
        <Button />
      </div>
    </div>
  );
}

export default Hero;
