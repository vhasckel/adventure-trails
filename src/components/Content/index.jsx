import Foto1 from "../../assets/foto1.jpg";
import Foto2 from "../../assets/foto2.jpg";
import Foto3 from "../../assets/foto3.jpg";

import styles from "./styles.module.css";

function Content() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sectionText}>
          <h2 className={styles.title2}>Explore trilhas incríveis</h2>
          <p className={styles.text}>
            O <strong>Adventure Trails FD</strong> é seu portal para explorar e
            compartilhar as melhores trilhas para trekking e ciclismo ao redor
            do mundo. Descubra rotas deslumbrantes, desde caminhos tranquilos
            por florestas exuberantes até trilhas desafiadoras em montanhas
            majestosas. Encontre informações detalhadas sobre cada trilha,
            incluindo distância, dificuldade, pontos de interesse naturais e
            dicas úteis para uma experiência eco-friendly.
          </p>
        </div>
        <div className={styles.section1}>
          <h2 className={styles.title1}>
            Compartilhe fotos, dicas e localização das suas trilhas favoritas
          </h2>
          <div className={styles.imgContainer}>
            <img className={styles.img} src={Foto1} alt="" />
            <img className={styles.img} src={Foto2} alt="" />
            <img className={styles.img} src={Foto3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
