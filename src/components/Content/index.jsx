import Button from "../Button";
import styles from "./styles.module.css";

function Content() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Explore trilhas incríveis</h2>
        <p className={styles.text}>
          O "Adventure Trails FD" é seu portal para explorar e compartilhar as
          melhores trilhas para trekking e ciclismo ao redor do mundo. Descubra
          rotas deslumbrantes, desde caminhos tranquilos por florestas
          exuberantes até trilhas desafiadoras em montanhas majestosas. Encontre
          informações detalhadas sobre cada trilha, incluindo distância,
          dificuldade, pontos de interesse naturais e dicas úteis para uma
          experiência eco-friendly.
        </p>
        <Button />
      </div>
      <div className={styles.more}>
        <h2>
          Compartilhe fotos, dicas e localização das suas trilhas favoritas
        </h2>
        <div className={styles.img}></div>
      </div>
    </>
  );
}

export default Content;
