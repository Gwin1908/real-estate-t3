import Link from "next/link";
import { julius } from "~/pages/_app";
import styles from "~/styles/Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <h3 className={styles.title + " " + julius.className}>Agency name</h3>
        <div className={styles.socials + " " + julius.className}>
          <p>Phone</p>
          <p>Email</p>
          <p>Other</p>
        </div>
        <div className={styles.legal}>
          <h3 className={styles.legal__title}>Legal details</h3>
          <p className={styles.legal__text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum esse
            fugiat eveniet libero molestias labore magnam vero consequatur,
            officia natus ullam veniam qui error saepe accusantium mollitia
            aspernatur vitae nisi!
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
