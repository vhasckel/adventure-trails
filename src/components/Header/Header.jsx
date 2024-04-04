import styles from "./styles.module.css";

function Header() {
  return (
    <header>
      <div className={styles.logo}>
        <div>
          <p>Adventure Trails FD</p>
        </div>
        <div className={styles.links}>
          <p>Explorar trilhas</p>
          <p>Cadastrar trilhas</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
