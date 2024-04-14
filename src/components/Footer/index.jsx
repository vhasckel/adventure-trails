import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Desenvolvido por Vanessa Hasckel</p>
      <div className={styles.social}>
        <BsGithub color="white" />
        <BsInstagram color="white" />
      </div>
    </footer>
  );
}

export default Footer;
