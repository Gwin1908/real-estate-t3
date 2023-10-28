// import Image from "next/image";
import Link from "next/link";
import styles from "~/styles/Header.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "~/utils/api";


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
          <AuthShowcase />
        </div>
      </nav>
    </header>
  );
}

export default Header;

function AuthShowcase() {
  const { data: sessionData } = useSession();

  return (
    <div>
      <p>
        {sessionData && <span>{sessionData.user?.name}</span>}
      </p>
      <button
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}

