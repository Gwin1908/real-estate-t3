import Image from "next/image";
import styles from "../../styles/Contacts.module.scss";

function Contacts() {
  return (
    <section className={styles.contacts}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          {/* <Image
            src="/photo.jpg"
            width={150}
            height={150}
            alt="photo"
            className={styles.image}
          /> */}
          <p className={styles.name}>Natalia Kovtun</p>
          <div className={styles.contactInfo}>
            <p className={styles.phone}>(067) 939-09-30</p>
            <a href="mailto:7987594@ukr.net" className={styles.email}>
              7987594@ukr.net
            </a>
          </div>
          <p className={styles.agencyInfo}>Agency info</p>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
