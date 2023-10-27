import Image from "next/image";
import Link from "next/link";
import styles from "~/styles/Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.wrapper}>
        <Link className={styles.logo} href="/">
          {/* <Image src="/logo.svg" alt="Real Estate Agency Name" /> */}
          Agency Name
        </Link>
        <div className={styles.nav}>
          <Link className={styles.nav__link} href="/properties">
            Properties
          </Link>
          <Link className={styles.nav__link} href="/news">
            News
          </Link>
          <Link className={styles.nav__link} href="/property">
            Single Property
          </Link>
          <Link className={styles.nav__link} href="/contacts">
            Contacts
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
