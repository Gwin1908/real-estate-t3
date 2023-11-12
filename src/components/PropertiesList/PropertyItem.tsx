import styles from "~/styles/PropertyItem.module.scss";
import { api } from "~/utils/api";
import type { Property } from "../AddProperty/AddProperty";
import Image from "next/image";

function PropertyItem({
  id,
  name,
  address,
  price,
  description,
  images,
}: Property) {
  const ctx = api.useContext();

  const { mutate: deleteProp } = api.property.deleteProperty.useMutation({
    onSuccess: () => {
      console.log("Property deleted");
      void ctx.property.getAll.invalidate();
    },
  });

  const handleDelete = (id: string) => {
    deleteProp({ id });
  };

  const imagesArr = images.split(", ");

  const { data } = api.s3.getPropertyImages.useQuery(imagesArr);

  return (
    <div className={styles.property}>
      {!!data && data.length > 0 && (
        <Image
          src={data[0]!}
          className={styles.image}
          alt="property"
          width={450}
          height={350}
        />
      )}
      <button
        onClick={() => {
          handleDelete(id);
        }}
        className={styles.delete}
      >
        X
      </button>
      <div className={styles.listingInfo}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.address}>{address}</p>
        <p className={styles.price}>{price}</p>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
}
export default PropertyItem;
