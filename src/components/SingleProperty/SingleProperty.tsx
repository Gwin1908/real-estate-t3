import { api } from "~/utils/api";
import styles from "~/styles/SingleProperty.module.scss";
import { julius } from "~/pages/_app";
import { type Property } from "../AddProperty/AddProperty";

function SingleProperty({ id, images, name, description, address }:Property) {

  const imagesArr = images.split(", ") ?? [];
  
  const { data: imagesData } = api.s3.getPropertyImages.useQuery(imagesArr);

  return (
    <section className={styles.singleProperty}>
      <div className={styles.bgImage}>
        {!!imagesData && (
            <img src={imagesData[0]} alt="property" width={1600} height={1000} className={styles.image}/>
          )}
        <div className={styles.address}>
          <p className={styles.street}>{name}</p>
          <p className={styles.city}>{address}</p>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>{name}</h1>
          <div className={styles.tags}>
            <div>
              6 <span>BEDS</span>
            </div>
            <div>
              8 <span>BATHS</span>
            </div>
            <div>
              6,451 <span>SQFT</span>
            </div>
            <div>
              0.705 <span>ACRES</span>
            </div>
          </div>
        </div>
        <div className={styles.description}>{description}</div>
        <div className={styles.contacts + " " + julius.className}>
          <img
            src="/pr-image.jpg"
            alt="realtor photo"
            width={200}
            height={200}
            className={styles.contacts__image}
          />
          <div className={styles.contacts__info}>
            <p>Name</p>
            <p>Realtor</p>
            <p>Telephone</p>
            <p>Email</p>
            <p>Other</p>
          </div>
        </div>
        <div>Map api</div>
      </div>
    </section>
  );
}

export default SingleProperty;
