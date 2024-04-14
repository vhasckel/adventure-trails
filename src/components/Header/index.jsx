import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiMountain1, CiMenuKebab } from "react-icons/ci";

import styles from "./styles.module.css";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={scrolled ? styles.scrolled : ""}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/">
            <CiMountain1 size={32} />
          </Link>
        </div>

        <div className={styles.links}>
          <CiMenuKebab
            className={styles.mobile}
            size={32}
            onClick={toggleMobileMenu}
          />

          {isMobileMenuOpen && (
            <div className={styles.mobileMenu}>
              <Link to="/explorar-trilhas">Explorar trilhas</Link>
              <Link to="/cadastrar-trilha">Cadastrar trilhas</Link>
            </div>
          )}

          <Link to="/explorar-trilhas">
            <p className={styles.desktop}>Explorar trilhas</p>
          </Link>

          <Link to="/cadastrar-trilha">
            <p className={styles.desktop}>Cadastrar trilhas</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
