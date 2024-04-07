import { CiMountain1 } from "react-icons/ci";
import { CiMenuKebab } from "react-icons/ci";
import styles from "./styles.module.css";

function Header() {
  return (
    <header>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <CiMountain1 size={32} />
          <p>Adventure Trails FD</p>
        </div>

        <div className={styles.links}>
          <CiMenuKebab className={styles.smallScreen} size={32} />
          <p className={styles.largeScreen}>Explorar trilhas</p>
          <p className={styles.largeScreen}>Cadastrar trilhas</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
