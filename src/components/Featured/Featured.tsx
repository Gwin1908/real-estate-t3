import { api } from "~/utils/api";
import styles from "../../styles/Featured.module.scss";
import Link from "next/link";
import FeaturedItem from "./FeaturedItem";

function Featured() {
  const { data: properties } = api.property.getFeatured.useQuery();

  console.log(properties);

  return (
    <section className={styles.featured}>
      <div className={styles.container}>
        <h1 className={styles.header}>Featured properties</h1>
        <div className={styles.cards}>
          {properties?.map(
            ({ id, name, address, price, description, images }) => (
              <div className={styles.card} key={id}>
                <FeaturedItem
                  id={id}
                  name={name}
                  address={address}
                  price={price}
                  description={description}
                  images={images}
                />
              </div>
            ),
          )}
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
