import Image from "next/image";
import styles from "../../styles/Featured.module.scss";
import Link from "next/link";

function Featured() {
  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <h1 className={styles.header}>Featured properties</h1>
        <div className={styles.mainCard}>
          <Image
            src="/1.webp"
            width={2160}
            height={1440}
            alt="featured property"
            className={styles.imgLarge}
          />
          <div className={styles.infoLarge}>
            <p>32496 Pacific Coast Highway</p>
            <p>Malibu, CA</p>
            <p>$22,000,000</p>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Image
              src="/2.webp"
              width={1200}
              height={600}
              alt="featured property"
              className={styles.img}
            />
            <div className={styles.info}>
              <p>32496 Pacific Coast Highway</p>
              <p>Malibu, CA</p>
              <p>$22,000,000</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="/3.webp"
              width={1200}
              height={600}
              alt="featured property"
              className={styles.img}
            />
            <div className={styles.info}>
              <p>32496 Pacific Coast Highway</p>
              <p>Malibu, CA</p>
              <p>$22,000,000</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="/4.webp"
              width={1200}
              height={600}
              alt="featured property"
              className={styles.img}
            />
            <div className={styles.info}>
              <p>32496 Pacific Coast Highway</p>
              <p>Malibu, CA</p>
              <p>$22,000,000</p>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="/properties" className={styles.browse}>
            Browse all cards
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Featured;
