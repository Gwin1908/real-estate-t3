import type { Property } from "../AddProperty/AddProperty";
import Link from "next/link";
import { api } from "~/utils/api";
import styles from "~/styles/FeaturedItem.module.scss";

function FeaturedItem({
  id,
  name,
  address,
  price,
  description,
  images,
}: Property) {

  const imagesArr = images.split(", ");

  const { data } = api.s3.getPropertyImages.useQuery(imagesArr);

  return (
    <div className={styles.property}>
      {!!data && data.length > 0 && (
        <Link href={`/properties/${id}`}>
          <img
            src={data[0]}
            className={styles.image}
            alt="property"
            width={1600}
            height={1000}
          />
        </Link>
      )}
      <div className={styles.listingInfo}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.address}>{address}</p>
        <p className={styles.price}>{price}</p>
      </div>
    </div>
  );
}
export default FeaturedItem;
