import { Link } from "react-router-dom";
import { CiMountain1, CiMenuKebab } from "react-icons/ci";

import styles from "./styles.module.css";

function Header() {
  return (
    <header>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">
            <CiMountain1 size={32} />
          </Link>
        </div>

        <div className={styles.links}>
          <CiMenuKebab className={styles.smallScreen} size={32} />
          <Link to="/explorar-trilhas">
            <p className={styles.largeScreen}>Explorar trilhas</p>
          </Link>
          <Link to="/cadastrar-trilha">
            <p className={styles.largeScreen}>Cadastrar trilhas</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
